import { useState } from 'react'
import { buildMailto } from '../utils/mailto.js'
import './ContactForm.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    const next = { ...values, [field]: e.target.value }
    setValues(next)
    setSent(false)
    if (touched[field]) setErrors(validate(next))
  }

  const blur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(found).length) {
      const first = ['name', 'email', 'message'].find((f) => found[f])
      document.getElementById(`cf-${first}`)?.focus()
      return
    }
    window.location.href = buildMailto({
      subject: `Website enquiry from ${values.name.trim()}`,
      body: `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`,
    })
    setSent(true)
  }

  const field = (name, label, props = {}) => {
    const Tag = props.as || 'input'
    const showError = touched[name] && errors[name]
    return (
      <div className="contact-form__field">
        <label htmlFor={`cf-${name}`}>{label}</label>
        <Tag
          id={`cf-${name}`}
          name={name}
          value={values[name]}
          onChange={update(name)}
          onBlur={blur(name)}
          aria-invalid={showError ? 'true' : 'false'}
          aria-describedby={showError ? `cf-${name}-error` : undefined}
          {...(Tag === 'input' ? { type: props.type || 'text', autoComplete: props.autoComplete } : { rows: 5 })}
        />
        {showError && (
          <p className="contact-form__error" id={`cf-${name}-error`}>
            {errors[name]}
          </p>
        )}
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {field('name', 'Name', { autoComplete: 'name' })}
      {field('email', 'Email Address', { type: 'email', autoComplete: 'email' })}
      {field('message', 'Message', { as: 'textarea' })}
      <button type="submit" className="btn contact-form__submit">
        Submit
      </button>
      <p className="contact-form__status" role="status">
        {sent && 'Your email app should open with this message ready to send.'}
      </p>
    </form>
  )
}

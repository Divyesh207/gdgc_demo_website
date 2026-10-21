import ContactForm from '../components/ContactForm.jsx'
import { buildMailto } from '../utils/mailto.js'
import useReveal from '../hooks/useReveal.js'
import union from '../assets/figma/contact-union.svg'
import woman from '../assets/figma/woman-newsletter.svg'
import circleGreen from '../assets/figma/circle-green.svg'
import circleYellow from '../assets/figma/circle-yellow.svg'
import './Contact.css'

const sponsorMailto = buildMailto({
  subject: 'Sponsorship enquiry',
  body: 'Hello GDSC team,\n\nWe would like to learn more about sponsoring your events.\n\nOrganisation:\nContact person:\n',
})

// Figma "Login / signup" (1:1268): contact form + sponsor call to action.
export default function Contact() {
  const sponsorRef = useReveal()
  return (
    <div className="contact-page">
      <section className="contact" aria-labelledby="contact-title">
        <header className="contact__head">
          <p className="contact__kicker">Got A Question?</p>
          <h1 id="contact-title" className="contact__title">
            Contact <span className="g-red">G</span>
            <span className="g-green">D</span>
            <span className="g-yellow">S</span>
            <span className="g-blue">C</span>!
          </h1>
          <p className="contact__lead">
            We would love to hear from you! Please feel free to reach out to us with any questions or comments using
            the contact form below.
          </p>
        </header>

        <div className="contact__stage">
          <img className="contact__union" src={union} alt="" aria-hidden="true" />
          <div className="contact__card">
            <ContactForm />
          </div>
          <img className="contact__woman" src={woman} width="527" height="527" alt="" aria-hidden="true" />
        </div>
      </section>

      <section className="sponsor reveal" ref={sponsorRef} id="sponsor" aria-labelledby="sponsor-title">
        <img className="sponsor__circle sponsor__circle--green" src={circleGreen} alt="" aria-hidden="true" />
        <img className="sponsor__circle sponsor__circle--yellow" src={circleYellow} alt="" aria-hidden="true" />
        <h2 id="sponsor-title" className="sponsor__title">
          Sponsor Us
        </h2>
        <p className="sponsor__text">
          By becoming a sponsor, you&apos;ll have the opportunity to promote your brand and showcase your commitment to
          social responsibility.
        </p>
        <a className="btn sponsor__btn" href={sponsorMailto}>
          Sponsor US
        </a>
      </section>
    </div>
  )
}

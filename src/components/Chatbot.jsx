import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getReply, quickReplies } from './chatbotReplies.js'
import robot from '../assets/figma/chat-robot.png'
import chatLogo from '../assets/figma/chat-logo.svg'
import closeIcon from '../assets/figma/chat-close.svg'
import sendIcon from '../assets/figma/chat-send.svg'
import './Chatbot.css'

const welcome = { id: 0, from: 'bot', text: 'Hey! Welcome to GDSC Website' }

function Message({ msg, onNavigate }) {
  return (
    <li className={`chat-msg chat-msg--${msg.from}`}>
      {msg.from === 'bot' ? <img className="chat-msg__avatar" src={robot} alt="" width="76" height="76" /> : <span className="chat-msg__you">You</span>}
      <div className="chat-msg__bubble">
        <p>{msg.text}</p>
        {msg.list && (
          <ol>
            {msg.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        )}
        {msg.link &&
          (msg.link.href ? (
            <a className="chat-msg__link" href={msg.link.href} target="_blank" rel="noreferrer">
              {msg.link.label} ↗
            </a>
          ) : (
            <Link className="chat-msg__link" to={msg.link.to} onClick={onNavigate}>
              {msg.link.label} →
            </Link>
          ))}
      </div>
    </li>
  )
}

// Figma "Frame 28" (1:2581) chat assistant, opened from a floating launcher.
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([welcome])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const launcherRef = useRef(null)
  const timer = useRef(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        launcherRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => () => clearTimeout(timer.current), [])

  const send = (text) => {
    const value = text.trim()
    if (!value || typing) return
    setMessages((m) => [...m, { id: Date.now(), from: 'user', text: value }])
    setDraft('')
    setTyping(true)
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, from: 'bot', ...getReply(value) }])
      setTyping(false)
    }, 650)
  }

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className={`chat-launcher${open ? ' is-hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Open GDSC chat assistant"
        aria-expanded={open}
        aria-controls="chatbot"
      >
        <img src={robot} alt="" width="64" height="64" />
      </button>

      <section
        id="chatbot"
        className={`chatbot${open ? ' is-open' : ''}`}
        role="dialog"
        aria-label="GDSC chat assistant"
        aria-hidden={!open}
        inert={!open}
      >
        <header className="chatbot__head">
          <img className="chatbot__logo" src={chatLogo} alt="Google Developer Student Clubs – D. Y. Patil College of Engineering, Pune" />
          <button
            type="button"
            className="chatbot__close"
            onClick={() => {
              setOpen(false)
              launcherRef.current?.focus()
            }}
            aria-label="Close chat"
          >
            <img src={closeIcon} alt="" width="23" height="23" />
          </button>
        </header>

        <ul className="chatbot__messages" ref={listRef} aria-live="polite">
          {messages.map((m) => (
            <Message key={m.id} msg={m} onNavigate={() => setOpen(false)} />
          ))}
          {typing && (
            <li className="chat-msg chat-msg--bot">
              <img className="chat-msg__avatar" src={robot} alt="" width="76" height="76" />
              <div className="chat-msg__bubble chat-msg__bubble--typing" aria-label="Assistant is typing">
                <span />
                <span />
                <span />
              </div>
            </li>
          )}
        </ul>

        <div className="chatbot__quick">
          {quickReplies.map((q) => (
            <button key={q} type="button" onClick={() => send(q)}>
              {q}
            </button>
          ))}
        </div>

        <form
          className="chatbot__form"
          onSubmit={(e) => {
            e.preventDefault()
            send(draft)
          }}
        >
          <label htmlFor="chat-input" className="visually-hidden">
            Message
          </label>
          <input
            id="chat-input"
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type here something..."
            autoComplete="off"
            maxLength={200}
          />
          <button type="submit" className="chatbot__send" aria-label="Send message" disabled={!draft.trim()}>
            <img src={sendIcon} alt="" width="58" height="24" />
          </button>
        </form>
      </section>
    </>
  )
}

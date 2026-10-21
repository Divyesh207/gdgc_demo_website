import { useState } from 'react'
import { previousEvents, site, stats, upcomingEvents } from '../data/site.js'
import Stat from '../components/Stat.jsx'
import EventModal from '../components/EventModal.jsx'
import useReveal from '../hooks/useReveal.js'
import sprinkle from '../assets/figma/sprinkle.png'
import flutterMark from '../assets/figma/badge-flutter.png'
import composeMark from '../assets/figma/badge-compose.png'
import ringBlue from '../assets/figma/badge-ring-blue.svg'
import ringGreen from '../assets/figma/badge-ring-green.svg'
import jsBadge from '../assets/figma/badge-js.svg'
import './Events.css'

const statLabels = { EVENTS: 'Events', WORKSHOPS: 'Workshop', MEMBERS: 'Members' }

function Badge({ type }) {
  if (type === 'js') return <img className="ev-badge" src={jsBadge} width="68" height="68" alt="" />
  const isFlutter = type === 'flutter'
  return (
    <span className="ev-badge">
      <img src={isFlutter ? ringBlue : ringGreen} width="68" height="68" alt="" />
      <img
        className={`ev-badge__logo ev-badge__logo--${type}`}
        src={isFlutter ? flutterMark : composeMark}
        alt=""
      />
    </span>
  )
}

function PreviousCard({ event, onDetails }) {
  return (
    <li className="ev-prev">
      <article className="ev-prev__card">
        <img className="ev-prev__img" src={event.image} width="188" height="187" alt={`${event.title} poster`} loading="lazy" />
        <h3 className="ev-prev__title">{event.title}</h3>
        <p className="ev-prev__date">{event.date}</p>
        <button type="button" className="btn ev-prev__btn" onClick={() => onDetails(event)}>
          Know More
        </button>
      </article>
      <Badge type={event.badge} />
    </li>
  )
}

// Figma "Desktop - 4" (1:2179): dedicated events & workshops page.
export default function Events() {
  const [selected, setSelected] = useState(null)
  const upcomingRef = useReveal()
  const previousRef = useReveal()

  return (
    <div className="events-page">
      {['left', 'right'].map((side) => (
        <span key={side} className={`events-page__sprinkle events-page__sprinkle--${side}`} aria-hidden="true">
          <img src={sprinkle} alt="" />
        </span>
      ))}

      <h1 className="events-page__title">
        EVENTS <span>&amp;</span> WORKSHOPS
      </h1>

      <div className="events-page__stats">
        {stats.map((s) => (
          <Stat key={s.label} {...s} label={statLabels[s.label]} className={`ev-stat ev-stat--${s.tone}`} />
        ))}
      </div>

      <section className="events-page__upcoming reveal" ref={upcomingRef} aria-labelledby="ev-upcoming">
        <h2 id="ev-upcoming" className="events-page__heading">
          UPCOMING EVENTS
        </h2>
        <ul className="events-page__upcoming-list">
          {upcomingEvents.map((e) => (
            <li key={e.id} className="ev-up">
              <img className="ev-up__img" src={e.image} width="258" height="257" alt={`${e.title} poster`} />
              <h3 className="ev-up__title">{e.title}</h3>
              <p className="ev-up__date">{e.date}</p>
              <a className="btn ev-up__btn" href={site.communityUrl} target="_blank" rel="noreferrer">
                Register Now
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="events-page__previous reveal" ref={previousRef} aria-labelledby="ev-previous">
        <h2 id="ev-previous" className="events-page__heading">
          PREVIOUS EVENTS
        </h2>
        <ul className="events-page__grid">
          {previousEvents.map((e) => (
            <PreviousCard key={e.id} event={e} onDetails={setSelected} />
          ))}
        </ul>
      </section>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

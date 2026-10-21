import { useState } from 'react'
import { previousEvents, stats, upcomingEvents } from '../data/site.js'
import EventCard from '../components/EventCard.jsx'
import EventModal from '../components/EventModal.jsx'
import Stat from '../components/Stat.jsx'
import useReveal from '../hooks/useReveal.js'
import './EventsSection.css'

// Figma "Events" (1:1050): heading, counters, upcoming card and 3×3 previous-events grid.
export default function EventsSection() {
  const [selected, setSelected] = useState(null)
  const headRef = useReveal()
  const upcomingRef = useReveal()
  const previousRef = useReveal()

  return (
    <section className="events-section" id="events" aria-labelledby="events-title">
      <div className="reveal" ref={headRef}>
        <h2 id="events-title" className="section-title">
          EVENTS &amp; WORKSHOPS
        </h2>
        <div className="events-section__stats">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>

      <div className="events-section__block reveal" ref={upcomingRef}>
        <h3 className="events-section__subtitle">UPCOMING EVENTS</h3>
        <div className="events-section__grid">
          {upcomingEvents.map((e) => (
            <EventCard key={e.id} event={e} upcoming />
          ))}
        </div>
      </div>

      <div className="events-section__block reveal" ref={previousRef}>
        <h3 className="events-section__subtitle">PREVIOUS EVENTS</h3>
        <div className="events-section__grid">
          {previousEvents.map((e) => (
            <EventCard key={e.id} event={e} onDetails={setSelected} />
          ))}
        </div>
      </div>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

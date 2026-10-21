import { site } from '../data/site.js'
import './EventCard.css'

// Figma "CARD" (1:1064): 300×450 white card, 300×300 artwork, level tag, date and action button.
export default function EventCard({ event, upcoming = false, onDetails }) {
  return (
    <article className="event-card">
      <div className="event-card__media">
        <img src={event.image} alt={`${event.title} poster`} loading="lazy" width="300" height="300" />
      </div>
      <div className="event-card__body">
        <div className="event-card__row">
          <h3 className="event-card__title">{event.title}</h3>
          <span className="event-card__tag">{event.level}</span>
        </div>
        <p className="event-card__date">
          <time>{event.date}</time>
        </p>
        {upcoming ? (
          <a className="btn event-card__btn" href={site.communityUrl} target="_blank" rel="noreferrer">
            REGISTER
          </a>
        ) : (
          <button type="button" className="btn event-card__btn" onClick={() => onDetails?.(event)}>
            KNOW MORE
          </button>
        )}
      </div>
    </article>
  )
}

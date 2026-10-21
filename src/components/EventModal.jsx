import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './EventModal.css'

// Accessible details dialog opened by the "KNOW MORE" buttons.
export default function EventModal({ event, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (event && !dialog.open) dialog.showModal()
    if (!event && dialog.open) dialog.close()
  }, [event])

  return (
    <dialog
      ref={dialogRef}
      className="event-modal"
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-labelledby="event-modal-title"
    >
      {event && (
        <div className="event-modal__panel">
          <button type="button" className="event-modal__close" onClick={onClose} aria-label="Close details">
            ×
          </button>
          <img className="event-modal__img" src={event.image} alt="" width="300" height="300" />
          <div className="event-modal__body">
            <span className="event-modal__tag">{event.level}</span>
            <h2 id="event-modal-title" className="event-modal__title">
              {event.title}
            </h2>
            <p className="event-modal__date">{event.date}</p>
            <p className="event-modal__desc">{event.description}</p>
            <Link className="btn event-modal__cta" to="/contact" onClick={onClose}>
              Ask us about this event
            </Link>
          </div>
        </div>
      )}
    </dialog>
  )
}

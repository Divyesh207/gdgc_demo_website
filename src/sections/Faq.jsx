import { Link } from 'react-router-dom'
import { faqs } from '../data/site.js'
import useReveal from '../hooks/useReveal.js'
import peeps from '../assets/figma/faq-peeps-sitting.png'
import floor from '../assets/figma/faq-sitting-floor.png'
import './Faq.css'

const illustrations = {
  peeps: { src: peeps, width: 303, height: 213 },
  floor: { src: floor, width: 248, height: 174 },
}

// Figma "FREQUENTLY ASKED QUESTIONS" band (1:532 + 1:533 + 1:718).
export default function Faq() {
  const ref = useReveal()
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__inner reveal" ref={ref}>
        <h2 id="faq-title" className="faq__title">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <ul className="faq__cards">
          {faqs.map((f) => {
            const art = f.illustration && illustrations[f.illustration]
            return (
              <li key={f.id} className={`faq-card faq-card--${f.id}`} style={{ '--border': f.border }}>
                {art && (
                  <img
                    className={`faq-card__art faq-card__art--${f.illustration}`}
                    src={art.src}
                    width={art.width}
                    height={art.height}
                    alt=""
                    loading="lazy"
                  />
                )}
                <div className="faq-card__box">
                  <h3 className="faq-card__q">{f.q}</h3>
                  <p className="faq-card__a">{f.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <Link className="btn faq__cta" to="/contact">
          Send us an email
        </Link>
      </div>
    </section>
  )
}

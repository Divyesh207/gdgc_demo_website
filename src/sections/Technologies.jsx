import { technologies } from '../data/site.js'
import useReveal from '../hooks/useReveal.js'
import externalLink from '../assets/figma/external-link.svg'
import './Technologies.css'

function TechRow({ tech, index }) {
  const ref = useReveal()
  const imageFirst = index % 2 === 0
  return (
    <li
      ref={ref}
      className={`tech reveal ${imageFirst ? 'tech--image-first' : 'tech--text-first'}`}
      style={{ '--accent': tech.color, '--band': tech.band }}
    >
      <div className="tech__inner">
        <div className="tech__media">
          <img src={tech.image} alt="" loading="lazy" className={`tech__img tech__img--${tech.id}`} />
        </div>
        <div className="tech__copy">
          <h3 className="tech__title">
            <span className="tech__accent">{tech.accent}</span>
            {tech.rest}
          </h3>
          <p className="tech__text">{tech.text}</p>
          <a
            className="btn tech__btn"
            href={tech.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Codelabs for ${tech.accent.toLowerCase()}${tech.rest.toLowerCase()} (opens in a new tab)`}
          >
            CODELABS
            <img src={externalLink} width="20" height="20" alt="" />
          </a>
        </div>
      </div>
    </li>
  )
}

// Figma "Technologies" light layout (1:557–1:715): full-bleed colour bands with
// animated illustrations. Dark theme uses the same layout with dark-tinted bands.
export default function Technologies() {
  const headRef = useReveal()
  return (
    <section className="technologies" id="technologies" aria-labelledby="tech-title">
      <header className="technologies__head reveal" ref={headRef}>
        <h2 id="tech-title" className="technologies__title">
          Technologies We Are Excited About
        </h2>
        <p className="technologies__sub">Opportunities to learn &amp; access deep technical content</p>
      </header>
      <ul className="technologies__list">
        {technologies.map((t, i) => (
          <TechRow key={t.id} tech={t} index={i} />
        ))}
      </ul>
    </section>
  )
}

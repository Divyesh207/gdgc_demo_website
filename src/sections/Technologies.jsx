import { technologies } from '../data/site.js'
import { useTheme } from '../theme/ThemeContext.jsx'
import useReveal from '../hooks/useReveal.js'
import externalLink from '../assets/figma/external-link.svg'
import './Technologies.css'

function TechRow({ tech, index, theme }) {
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
          <img
            src={theme === 'dark' ? tech.image : tech.imageLight}
            alt=""
            loading="lazy"
            className={`tech__img tech__img--${tech.id}`}
          />
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
            <img src={externalLink} width="15" height="15" alt="" />
          </a>
        </div>
      </div>
    </li>
  )
}

// Figma "Technologies" (dark 1:1003, light 1:557–1:715).
export default function Technologies() {
  const { theme } = useTheme()
  const headRef = useReveal()
  return (
    <section className="technologies" id="technologies" aria-labelledby="tech-title">
      <h2 className="technologies__kicker section-title">Opportunities with GDSC</h2>
      <header className="technologies__head reveal" ref={headRef}>
        <h2 id="tech-title" className="technologies__title">
          Technologies We Are Excited About
        </h2>
        <p className="technologies__sub">Opportunities to learn &amp; access deep technical content</p>
      </header>
      <ul className="technologies__list">
        {technologies.map((t, i) => (
          <TechRow key={t.id} tech={t} index={i} theme={theme} />
        ))}
      </ul>
    </section>
  )
}

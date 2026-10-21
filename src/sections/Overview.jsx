import { concepts } from '../data/site.js'
import SocialButtons from '../components/SocialButtons.jsx'
import useReveal from '../hooks/useReveal.js'
import './Overview.css'

// Figma "OverView" (1:969): intro copy + social row on the left, 2×2 concept cards on the right.
export default function Overview() {
  const ref = useReveal()
  return (
    <section className="overview container reveal" id="overview" ref={ref} aria-labelledby="overview-title">
      <div className="overview__intro">
        <h2 id="overview-title" className="overview__title">
          What is GDSC ?
        </h2>
        <p className="overview__lead">
          Google Developer Student Clubs is a Developers program for university students to learn mobile and web
          development skills, design thinking skills and leadership skills.
        </p>
        <p className="overview__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula arcu ut dictum condimentum.
          Phasellus pulvinar at quam eu suscipit. Aliquam id vehicula lacus, vel commodo ligula.
        </p>
        <SocialButtons ids={['github', 'linkedin', 'instagram', 'discord']} className="overview__social" />
      </div>

      <ul className="overview__concepts">
        {concepts.map((c) => (
          <li key={c.title} className="concept">
            <h3 className={`concept__chip concept__chip--${c.tone}`}>{c.title}</h3>
            <p className="concept__text">{c.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

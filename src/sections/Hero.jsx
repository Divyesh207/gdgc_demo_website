import { site } from '../data/site.js'
import gdscMark from '../assets/figma/gdsc-mark.png'
import cubeBlue from '../assets/figma/cube-blue.svg'
import cubeOrange from '../assets/figma/cube-orange.svg'
import './Hero.css'

// Figma "HOME" (1:563 light / 1:1204 + 1:1209 dark).
export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img className="hero__cube hero__cube--blue" src={cubeBlue} width="137" height="137" alt="" aria-hidden="true" />
      <img className="hero__cube hero__cube--orange" src={cubeOrange} width="137" height="137" alt="" aria-hidden="true" />

      <div className="hero__content">
        <img className="hero__mark" src={gdscMark} width="120" height="59" alt="" />
        <h1 id="hero-title" className="hero__title">
          {site.name}
        </h1>
        <p className="hero__subtitle">{site.college}</p>
        <a className="btn hero__cta" href={site.communityUrl} target="_blank" rel="noreferrer">
          JOIN COMMUNITY
        </a>
      </div>
    </section>
  )
}

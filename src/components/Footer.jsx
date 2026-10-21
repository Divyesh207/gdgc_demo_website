import { useTheme } from '../theme/ThemeContext.jsx'
import { footerColumns, socials } from '../data/site.js'
import wave from '../assets/figma/footer-wave.svg'
import gdscMark from '../assets/figma/gdsc-mark.png'
import footerBgLight from '../assets/figma/footer-bg-light.svg'
import footerShapes from '../assets/figma/footer-animation.svg'
import logoMark from '../assets/figma/footer-logo-mark.svg'
import logoText from '../assets/figma/footer-logo-text.svg'
import githubIcon from '../assets/figma/social-github.svg'
import linkedinIcon from '../assets/figma/social-linkedin.svg'
import instagramIcon from '../assets/figma/social-instagram.svg'
import discordBg from '../assets/figma/discord-bg.svg'
import discordGlyph from '../assets/figma/discord-glyph.svg'
import './Footer.css'

// Dark theme labels the same link groups differently (Figma "Footer" 1:1156).
const darkTitles = { 'Quick Links': 'Programs', 'Important Links': 'Developers', Contribute: 'Contribute' }
const darkOrder = ['Quick Links', 'Important Links', 'Contribute']

function LinkColumn({ title, links, className = '' }) {
  return (
    <div className={`footer__col ${className}`}>
      <h2 className="footer__heading">{title}</h2>
      <ul>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ id }) {
  if (id === 'discord') {
    return (
      <span className="footer__discord">
        <img src={discordBg} alt="" />
        <img className="footer__discord-glyph" src={discordGlyph} alt="" />
      </span>
    )
  }
  if (id === 'linkedin') {
    return (
      <span className="footer__linkedin">
        <img src={linkedinIcon} alt="" />
      </span>
    )
  }
  return <img src={id === 'github' ? githubIcon : instagramIcon} alt="" />
}

function DarkFooter() {
  const columns = darkOrder.map((t) => footerColumns.find((c) => c.title === t))
  return (
    <footer className="footer footer--dark">
      <img className="footer__wave" src={wave} alt="" aria-hidden="true" />
      <div className="footer__dark-inner">
        <div className="footer__brand">
          <img className="footer__brand-mark" src={gdscMark} width="265" height="130" alt="" />
          <p className="footer__brand-title">Google Developer Students Club</p>
          <p className="footer__brand-sub">Dr. D. Y. Patil College of Engineering</p>
        </div>
        {columns.map((c, i) => (
          <LinkColumn key={c.title} title={darkTitles[c.title]} links={c.links} className={`footer__col--d${i}`} />
        ))}
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} GDSC D.Y. Patil College of Engineering</p>
    </footer>
  )
}

function LightFooter() {
  return (
    <footer className="footer footer--light">
      <img className="footer__shapes" src={footerShapes} alt="" aria-hidden="true" />
      <img className="footer__slant" src={footerBgLight} alt="" aria-hidden="true" />
      <div className="footer__light-inner">
        <div className="footer__logo" role="img" aria-label="Google Developer Student Clubs – D. Y. Patil College of Engineering, Pune">
          <img className="footer__logo-mark" src={logoMark} alt="" />
          <img className="footer__logo-text" src={logoText} alt="" />
        </div>
        {footerColumns.map((c) => (
          <LinkColumn key={c.title} title={c.title} links={c.links} />
        ))}
        <div className="footer__connect">
          <h2 className="footer__heading">Connect</h2>
          <ul>
            {socials.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <SocialIcon id={s.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} GDSC D.Y. Patil College of Engineering</p>
    </footer>
  )
}

export default function Footer() {
  const { theme } = useTheme()
  return theme === 'dark' ? <DarkFooter /> : <LightFooter />
}

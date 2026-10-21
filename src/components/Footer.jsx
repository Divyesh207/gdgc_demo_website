import { footerColumns, socials } from '../data/site.js'
import footerShapes from '../assets/figma/footer-animation.svg'
import logoMark from '../assets/figma/footer-logo-mark.svg'
import logoText from '../assets/figma/footer-logo-text.svg'
import githubIcon from '../assets/figma/social-github.svg'
import linkedinIcon from '../assets/figma/social-linkedin.svg'
import instagramIcon from '../assets/figma/social-instagram.svg'
import discordBg from '../assets/figma/discord-bg.svg'
import discordGlyph from '../assets/figma/discord-glyph.svg'
import './Footer.css'

function LinkColumn({ title, links }) {
  return (
    <div className="footer__col">
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

// Figma "Frame 297" (1:606): slanted dark band with animated shapes, used in both themes.
export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__shapes" src={footerShapes} alt="" aria-hidden="true" />
      <div className="footer__slant" aria-hidden="true" />
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

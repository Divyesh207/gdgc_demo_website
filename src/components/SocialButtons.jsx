import { socials } from '../data/site.js'
import github from '../assets/figma/github.svg'
import linkedin from '../assets/figma/linkedin.svg'
import instagram from '../assets/figma/instagram.svg'
import discord from '../assets/figma/discord-glyph.svg'
import './SocialButtons.css'

const icons = { github, linkedin, instagram, discord }

// Round blue social buttons (Figma "Social Media" groups 1:972 / 1:1177).
export default function SocialButtons({ ids = ['github', 'linkedin', 'instagram'], direction = 'row', className = '' }) {
  const items = socials.filter((s) => ids.includes(s.id))
  return (
    <ul className={`social-buttons social-buttons--${direction} ${className}`}>
      {items.map((s) => (
        <li key={s.id}>
          <a className="social-buttons__btn" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
            <img className={`social-buttons__icon social-buttons__icon--${s.id}`} src={icons[s.id]} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}

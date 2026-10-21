import SocialButtons from './SocialButtons.jsx'
import './SocialRail.css'

// Floating vertical social bar on the right edge (Figma "Frame 24", 1:1176).
export default function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social media">
      <SocialButtons direction="column" />
      <span className="social-rail__line" aria-hidden="true" />
    </aside>
  )
}

import { useTheme } from '../theme/ThemeContext.jsx'
import moonLight from '../assets/figma/moon.svg'
import moonDark from '../assets/figma/moon-dark.svg'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <img src={theme === 'dark' ? moonLight : moonDark} width="19" height="20" alt="" />
    </button>
  )
}

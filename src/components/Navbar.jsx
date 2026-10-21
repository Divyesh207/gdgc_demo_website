import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../data/site.js'
import NavItem from './NavItem.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import logo from '../assets/figma/logo-nav.png'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  const [lastLocation, setLastLocation] = useState(location)
  if (lastLocation !== location) {
    setLastLocation(location)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="GDSC home">
          <img src={logo} width="300" height="50" alt="Google Developer Student Clubs – D.Y. Patil College of Engineering" />
        </Link>

        <nav className="navbar__nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} className="navbar__link" />
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <button
            type="button"
            className={`navbar__burger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`} id="mobile-menu" aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} className="mobile-menu__link" onNavigate={() => setOpen(false)} />
          ))}
        </nav>
      </div>
      {open && (
        <button type="button" className="mobile-menu__scrim" aria-label="Close menu" tabIndex={-1} onClick={() => setOpen(false)} />
      )}
    </header>
  )
}

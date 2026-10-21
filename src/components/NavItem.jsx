import { Link, useLocation } from 'react-router-dom'

// Renders an internal route/hash link or an external link from a nav config entry.
export default function NavItem({ item, className = '', onNavigate }) {
  const { pathname, hash } = useLocation()

  if (item.href) {
    return (
      <a className={className} href={item.href} target="_blank" rel="noreferrer" onClick={onNavigate}>
        {item.label}
      </a>
    )
  }

  const [path, targetHash = ''] = item.to.split('#')
  const isActive = pathname === path && (targetHash ? hash === `#${targetHash}` : !hash)

  return (
    <Link
      className={`${className}${isActive ? ' is-active' : ''}`}
      to={item.to}
      aria-current={isActive ? 'page' : undefined}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  )
}

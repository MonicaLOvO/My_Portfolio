import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
] as const

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand" end>
          Portfolio
        </NavLink>
        <div className="nav-right">
          <nav className="nav-links" aria-label="Main">
            {links.map(({ to, label, ...rest }) => (
              <NavLink key={to} to={to} {...rest}>
                {label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

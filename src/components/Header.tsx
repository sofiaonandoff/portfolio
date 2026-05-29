import { NavLink } from 'react-router-dom'
import { site } from '../data/portfolio'
import './Header.css'

const navItems = [
  { to: '/off-projects', label: 'OFF PROJECTS' },
  { to: '/on-projects', label: 'ON PROJECTS' },
  { to: '/about', label: 'ABOUT' },
  { to: '/contact', label: 'CONTACT' },
]

export function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-header__brand" end>
        {site.brand}
      </NavLink>
      <nav className="site-header__nav" aria-label="Main">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? 'site-header__link is-active' : 'site-header__link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

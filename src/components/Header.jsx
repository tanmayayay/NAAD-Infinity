import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { VENTURES } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" onClick={close}>
          NAAD<em>&nbsp;INFINITY</em>
        </Link>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? '✕' : '☰'}
        </button>
        <nav className={`main-nav${open ? ' open' : ''}`}>
          <NavLink to="/" end onClick={close} className={pathname === '/' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" onClick={close} className={pathname === '/about' ? 'active' : ''}>About</NavLink>
          <NavLink to="/businesses" onClick={close} className={pathname === '/businesses' ? 'active' : ''}>Businesses</NavLink>
          <div className="nav-drop">
            <button type="button">Our Ventures ▾</button>
            <div className="nav-drop-menu">
              {VENTURES.map((v) => (
                <Link key={v.id} to="/ventures" onClick={close}>
                  <span className="nd-name">{v.name}</span>
                  <span className="nd-sub">{v.tagline} · {v.status === 'live' ? 'Live' : 'In development'}</span>
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/newsroom" onClick={close} className={pathname === '/newsroom' ? 'active' : ''}>Newsroom</NavLink>
          <NavLink to="/careers" onClick={close} className={pathname === '/careers' ? 'active' : ''}>Careers</NavLink>
          <NavLink to="/contact" onClick={close} className={pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

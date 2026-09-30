import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV, VENTURES } from '../data/content.js';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="wordmark" onClick={() => setMobileOpen(false)}>
          NAAD <span className="w-accent">INFINITY</span>
        </Link>

        <button
          className="burger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>

        <nav className={'nav' + (mobileOpen ? ' mobile-open' : '')}>
          {NAV.map((item) =>
            item.drop ? (
              <div className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
                <div className="drop">
                  {VENTURES.map((v) =>
                    v.url ? (
                      <a
                        key={v.name}
                        href={v.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {v.name}
                        <span className="ext">Live &#8599;</span>
                      </a>
                    ) : (
                      <Link
                        key={v.name}
                        to="/ventures"
                        onClick={() => setMobileOpen(false)}
                      >
                        {v.name}
                        <span className="ext">In development</span>
                      </Link>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <div className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              </div>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

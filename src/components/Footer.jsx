import { Link } from 'react-router-dom'
import { DIVISIONS, VENTURES } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-grid">
        <div className="foot-brand">
          <Link to="/" className="wordmark">NAAD<em>&nbsp;INFINITY</em></Link>
          <p>
            A 360-degree ecosystem built to unify, power and monetise the music
            &amp; live-entertainment lifecycle — across digital media, physical
            production, commerce, education, event production and live experiences.
          </p>
        </div>
        <div className="foot-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/businesses">Businesses</Link></li>
            <li><Link to="/ventures">Ventures</Link></li>
            <li><Link to="/newsroom">Newsroom</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Ventures</h4>
          <ul>
            {VENTURES.map((v) => (
              <li key={v.id}>
                {v.url ? (
                  <a href={v.url} target="_blank" rel="noreferrer">{v.name} ↗</a>
                ) : (
                  <Link to="/ventures">{v.name} — in development</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="foot-col">
          <h4>Divisions</h4>
          <ul>
            {DIVISIONS.slice(0, 5).map((d) => (
              <li key={d.id}><Link to="/businesses">{d.name}</Link></li>
            ))}
            <li><Link to="/businesses">+ {DIVISIONS.length - 5} more</Link></li>
          </ul>
        </div>
      </div>
      <div className="foot-base">
        <span>© 2026 NAAD Infinity. All rights reserved.</span>
        <span>Corporate website — content being finalised.</span>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom';
import { DIVISIONS, VENTURES } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <p className="f-brand">
              NAAD <span className="w-accent">INFINITY</span>
            </p>
            <p>
              The mother company building a 360-degree ecosystem for music
              and live entertainment in India — seven divisions operated
              directly, three independent ventures underneath.
            </p>
          </div>
          <div>
            <h4>Divisions</h4>
            <ul>
              {DIVISIONS.slice(0, 5).map((d) => (
                <li key={d.name}>
                  <Link to="/businesses">{d.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/businesses">All seven divisions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Ventures</h4>
            <ul>
              {VENTURES.map((v) =>
                v.url ? (
                  <li key={v.name}>
                    <a href={v.url} target="_blank" rel="noreferrer">
                      {v.name}
                      <span className="ext">&#8599;</span>
                    </a>
                  </li>
                ) : (
                  <li key={v.name}>
                    <Link to="/ventures">{v.name}</Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/newsroom">Newsroom</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NAAD Infinity. All rights reserved.</span>
          <span>CIN: To be confirmed</span>
        </div>
      </div>
    </footer>
  );
}

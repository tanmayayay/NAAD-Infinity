import { Link } from 'react-router-dom'
import { DIVISIONS } from '../data/site.js'
import { IMAGES } from '../lib/images.js'

export default function Businesses() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Our businesses</span>
          <h1>Seven divisions, run directly by the mother company.</h1>
          <p className="lede">
            NAAD Infinity operates each of these divisions itself — no franchises,
            no loose affiliates. One standard of delivery across production,
            commerce, media and education.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {DIVISIONS.map((d, i) => (
            <div key={d.id} id={d.id} style={{ marginBottom: i < DIVISIONS.length - 1 ? 110 : 0 }}>
              <div className={`split${i % 2 === 1 ? ' flip' : ''}`}>
                <div>
                  <img src={IMAGES[d.image]} alt={d.name} loading="lazy" />
                </div>
                <div>
                  <div className="nic" style={{ fontSize: 11.5, letterSpacing: '0.2em', color: 'var(--gold-deep)', fontWeight: 600, marginBottom: 14 }}>
                    {d.nic}
                  </div>
                  <h2>{d.name}</h2>
                  <p>{d.description}</p>
                  <ul className="offer-list">
                    {d.offers.map((o) => <li key={o}>{o}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Partner with a division — or all seven.</h2>
          <p>Corporate partnerships, venue alliances and B2B service contracts are handled centrally.</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-gold">Start a conversation</Link>
            <Link to="/ventures" className="btn btn-outline-light">See the ventures</Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { VENTURES } from '../data/site.js'

export default function Ventures() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Our ventures</span>
          <h1>Separate companies. One ecosystem.</h1>
          <p className="lede">
            Three digital ventures operate under NAAD Infinity — each with its own
            product, market and momentum, each plugged into the mother company's
            infrastructure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {VENTURES.map((v) => (
              <article key={v.id} className="news-card" style={{ padding: 48 }}>
                <div className="nmeta">
                  <span className={`badge ${v.status === 'live' ? 'badge-live' : 'badge-soon'}`}>
                    {v.status === 'live' ? 'Live' : 'In development'}
                  </span>
                  <span className="ndate">{v.nic}</span>
                </div>
                <div className="vtag" style={{ fontSize: 13, letterSpacing: '0.24em', color: 'var(--gold-deep)', fontWeight: 600, marginBottom: 10 }}>
                  {v.name}
                </div>
                <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>{v.tagline}</h2>
                <p style={{ maxWidth: '70ch' }}>{v.description}</p>
                <div style={{ marginTop: 10 }}>
                  {v.url ? (
                    <a href={v.url} target="_blank" rel="noreferrer" className="btn btn-gold">
                      Visit {v.name} ↗
                    </a>
                  ) : (
                    <span className="tbc">Launch timeline to be announced — track progress in the newsroom.</span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="note-sample">
            The ticketing platform is in development; its name, launch date and
            product details will be announced here.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Invest in, partner with, or build for the ventures.</h2>
          <p>Venture-level conversations are routed through the corporate office.</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-gold">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

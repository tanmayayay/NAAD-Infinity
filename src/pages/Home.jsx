import { Link } from 'react-router-dom'
import { ACTIVITIES, DIVISIONS, VENTURES, NEWS } from '../data/site.js'
import { IMAGES } from '../lib/images.js'

const STATS = [
  { num: '11', label: 'Ecosystem pillars' },
  { num: '7', label: 'Operating divisions' },
  { num: '3', label: 'Digital ventures' },
  { num: 'Y1–Y3', label: 'Phased rollout' },
]

export default function Home() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero">
        <div className="hero-bg"><img src={IMAGES['hero-arena']} alt="Arena concert — NAAD Infinity live production" /></div>
        <div className="hero-inner">
          <span className="eyebrow on-dark">NAAD Infinity</span>
          <h1>One ecosystem for the entire <em>music &amp; live-entertainment</em> lifecycle.</h1>
          <p className="lede">
            NAAD Infinity is building a 360-degree ecosystem to unify, power and monetise
            the modern music and live-entertainment lifecycle — bridging industry
            professionals, creators and consumers across digital media, physical
            production, commerce, education, event production and live experiences.
          </p>
          <div className="btn-row">
            <Link to="/businesses" className="btn btn-gold">Explore our businesses</Link>
            <Link to="/ventures" className="btn btn-outline-light">Meet the ventures</Link>
          </div>
        </div>
      </section>

      {/* ——— stats ——— */}
      <section className="stats-strip">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— one ecosystem: 10 activities ——— */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The ecosystem</span>
            <h2>Ten activities. One infrastructure.</h2>
            <p className="lede">
              Seven operating divisions run directly by the mother company, and three
              digital ventures built under it — each mapped to its industry
              classification, each feeding the others.
            </p>
          </div>
          <div className="card-grid">
            {ACTIVITIES.map((a) => (
              <Link key={a.name} to={a.href} className="biz-card" style={{ textDecoration: 'none' }}>
                <div className="nic">{a.nic}</div>
                <h3>{a.name}</h3>
                <p style={{ marginBottom: 18 }}>
                  {a.kind === 'division' ? 'Mother company — operating division' : 'Venture — under NAAD Infinity'}
                </p>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  {a.status && (
                    <span className={`badge ${a.status === 'live' ? 'badge-live' : 'badge-soon'}`}>
                      {a.status === 'live' ? 'Live' : 'In development'}
                    </span>
                  )}
                  <span className="card-link">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— ventures spotlight ——— */}
      <section className="section-tight" style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow on-dark">Ventures</span>
            <h2 style={{ color: '#fff' }}>Digital ventures, already in motion.</h2>
            <p className="lede on-dark">
              Separate ventures under NAAD Infinity — each with its own product,
              team and market, all plugged into the ecosystem.
            </p>
          </div>
          <div className="card-grid cols-2">
            {VENTURES.map((v) => (
              <div className="venture-card" key={v.id}>
                <div className="vtag">{v.name} · {v.nic}</div>
                <h3>{v.tagline}</h3>
                <p>{v.description}</p>
                <div style={{ marginTop: 26, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className={`badge ${v.status === 'live' ? 'badge-live' : 'badge-soon'}`}>
                    {v.status === 'live' ? 'Live' : 'In development'}
                  </span>
                  {v.url ? (
                    <a href={v.url} target="_blank" rel="noreferrer" className="btn btn-gold" style={{ padding: '12px 24px' }}>
                      Visit {v.name} ↗
                    </a>
                  ) : (
                    <Link to="/ventures" className="btn btn-outline-light" style={{ padding: '12px 24px' }}>
                      Track progress
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— divisions preview ——— */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <img src={IMAGES['backstage-production']} alt="Backstage production — staging and line arrays" />
            </div>
            <div>
              <span className="eyebrow">Mother company</span>
              <h2>Seven divisions. Zero handoffs.</h2>
              <p className="lede">
                Event production, equipment rental, artist management, studios,
                streaming, trade shows and the academy — operated directly by
                NAAD Infinity so value never leaks between vendors.
              </p>
              <ul className="offer-list">
                {DIVISIONS.slice(0, 4).map((d) => (
                  <li key={d.id}><strong>{d.name}</strong> — {d.short}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link to="/businesses" className="btn btn-outline">All seven divisions</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— newsroom teaser ——— */}
      <section className="section-tight" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: 'none', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <span className="eyebrow">Newsroom</span>
              <h2 style={{ marginBottom: 0 }}>Signals from the ecosystem.</h2>
            </div>
            <Link to="/newsroom" className="btn btn-outline">All stories</Link>
          </div>
          <div className="card-grid">
            {NEWS.slice(0, 3).map((n) => (
              <article className="news-card" key={n.id}>
                <div className="nmeta">
                  <span className="badge badge-sample">Sample</span>
                  <span className="ndate">{n.category} · {n.date}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— contact CTA ——— */}
      <section className="cta-band">
        <div className="wrap">
          <h2>Build on the ecosystem with us.</h2>
          <p>Partnerships, press, talent and investment enquiries — the corporate office responds to every serious conversation.</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-gold">Contact us</Link>
            <Link to="/about" className="btn btn-outline-light">Our story</Link>
          </div>
        </div>
      </section>
    </>
  )
}

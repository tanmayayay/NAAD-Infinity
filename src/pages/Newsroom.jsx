import { Link } from 'react-router-dom'
import { NEWS } from '../data/site.js'

export default function Newsroom() {
  const [featured, ...rest] = NEWS
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Newsroom</span>
          <h1>Announcements &amp; insights.</h1>
          <p className="lede">
            Corporate announcements, venture updates and thinking from inside the
            ecosystem.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {/* featured */}
          <article className="news-card" style={{ marginBottom: 36, background: 'var(--ink)', borderColor: 'var(--line-dark)' }}>
            <div className="nmeta">
              <span className="badge badge-sample">Sample</span>
              <span className="badge badge-dark">{featured.category}</span>
              <span className="ndate" style={{ color: '#8a929b' }}>{featured.date}</span>
            </div>
            <h2 style={{ color: '#fff' }}>{featured.title}</h2>
            <p style={{ color: '#aeb5bd', maxWidth: '72ch' }}>{featured.excerpt}</p>
          </article>

          <div className="card-grid">
            {rest.map((n) => (
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

          <p className="note-sample">
            All newsroom posts are sample content for the corporate website
            concept. Real announcements will replace them at launch.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Press enquiries.</h2>
          <p>Journalists and industry analysts — reach the corporate communications desk.</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-gold">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

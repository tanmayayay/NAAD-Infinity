import { Link } from 'react-router-dom'
import { ROLES, VALUES } from '../data/site.js'
import { IMAGES } from '../lib/images.js'

export default function Careers() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Careers</span>
          <h1>Build the infrastructure the industry runs on.</h1>
          <p className="lede">
            NAAD Infinity is assembling operators, engineers, artists and educators
            across seven divisions and three ventures. Early joiners shape the
            company, not just their role.
          </p>
        </div>
      </section>

      {/* culture */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <img src={IMAGES['tradeshow-floor']} alt="NAAD Infinity industry exhibition" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">Culture</span>
              <h2>A company of builders.</h2>
              <p>
                We hire people who have carried a show, shipped a product, mixed a
                record or taught a room — and want to do it at ecosystem scale.
                Rigour over theatre, ownership over hierarchy.
              </p>
              <ul className="offer-list">
                {VALUES.map((v) => (
                  <li key={v.title}><strong>{v.title}.</strong> {v.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* open roles */}
      <section className="section-tight" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Open roles</span>
            <h2>Where we are hiring.</h2>
            <p className="lede">
              Indicative roles across the divisions. Full job descriptions will be
              published as each hiring wave opens.
            </p>
          </div>
          <div>
            {ROLES.map((r) => (
              <div className="role-row" key={r.title}>
                <div>
                  <div className="rdept">{r.dept}</div>
                  <h3>{r.title}</h3>
                  <p>{r.note}</p>
                </div>
                <span className="badge badge-soon" style={{ whiteSpace: 'nowrap' }}>Opening soon</span>
              </div>
            ))}
          </div>
          <p className="note-sample">
            Roles are placeholders. To express interest ahead of formal openings,
            write to the corporate office via the contact page with the subject line "Careers".
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-gold">Express interest</Link>
          </div>
        </div>
      </section>
    </>
  )
}

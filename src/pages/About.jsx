import { Link } from 'react-router-dom'
import { PHASES, VALUES } from '../data/site.js'
import { IMAGES } from '../lib/images.js'

const LEADERSHIP_SLOTS = [
  { role: 'Founder & Managing Director', note: 'Profile to be announced.' },
  { role: 'Chief Operating Officer', note: 'Profile to be announced.' },
  { role: 'Head of Digital Ventures', note: 'Profile to be announced.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">About NAAD Infinity</span>
          <h1>The infrastructure company for music &amp; live entertainment.</h1>
          <p className="lede">
            NAAD Infinity exists to do what no single promoter, studio, retailer or
            platform can do alone — own the full lifecycle, and make every part of
            it work for the others.
          </p>
        </div>
      </section>

      {/* mission / vision */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">Mission</span>
              <h2>Unify. Power. Monetise.</h2>
              <p>
                NAAD Infinity will build a comprehensive, 360-degree ecosystem built to
                unify, power and monetise the modern music and live-entertainment
                lifecycle — seamlessly bridging the gap between industry
                professionals, creators and consumers.
              </p>
              <p>
                The venture establishes powerful infrastructure across digital media,
                physical production, commerce, education, event production and live
                experiences — eleven pillars, one accountable operator.
              </p>
            </div>
            <div>
              <img src={IMAGES['studio-console']} alt="Recording studio control room" />
            </div>
          </div>
        </div>
      </section>

      {/* the lifecycle narrative */}
      <section className="section-tight" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The thesis</span>
            <h2>Follow one song through the ecosystem.</h2>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <h3>Create</h3>
              <p>Tracked, mixed and mastered in NAAD studios; the artist developed and managed in-house.</p>
            </div>
            <div className="value-card">
              <h3>Connect</h3>
              <p>Released into a professional network on STRINGS; premiered and programmed on the NAAD OTT platform.</p>
            </div>
            <div className="value-card">
              <h3>Equip</h3>
              <p>Instruments bought on SOUNDKART; tour PA and staging drawn from the NAAD rental network.</p>
            </div>
            <div className="value-card">
              <h3>Experience</h3>
              <p>Performed at NAAD-produced festivals, ticketed on the NAAD platform, debated at the NAAD conference — and taught at the NAAD academy next season.</p>
            </div>
          </div>
        </div>
      </section>

      {/* phase-wise rollout */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Roadmap</span>
            <h2>A phased rollout, Y1 to Y3.</h2>
            <p className="lede">
              The ecosystem is sequenced deliberately: networking and live events
              establish the community first; ticketing and rental scale the
              commerce layer; studios, OTT and education deepen the moat.
            </p>
          </div>
          <div className="timeline">
            {PHASES.map((p) => (
              <div className="tl-phase" key={p.phase}>
                <div className="tl-when">{p.when}</div>
                <h3>{p.phase}</h3>
                <div className="tl-items">
                  {p.items.map((it) => <span key={it}>{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section-tight" style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow on-dark">What we believe</span>
            <h2 style={{ color: '#fff' }}>Operating principles.</h2>
          </div>
          <div className="value-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title} style={{ borderTopColor: 'var(--gold)' }}>
                <h3 style={{ color: '#fff' }}>{v.title}</h3>
                <p style={{ color: '#aeb5bd' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* leadership — placeholders */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Leadership</span>
            <h2>The people behind the build.</h2>
            <p className="lede">
              Company details and the full organisational hierarchy are being
              finalised and will be published here.
            </p>
          </div>
          <div className="card-grid">
            {LEADERSHIP_SLOTS.map((l) => (
              <div className="leader-card" key={l.role}>
                <div className="avatar-ph">N</div>
                <h3>To be announced</h3>
                <div className="lrole">{l.role}</div>
                <p className="tbc" style={{ marginTop: 14 }}>{l.note}</p>
              </div>
            ))}
          </div>
          <p className="note-sample">
            Leadership profiles are placeholders. The founder will provide company
            details and hierarchy for this section.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Talk to the corporate office.</h2>
          <p>Partnerships, press and investment enquiries are welcome.</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-gold">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom';
import SectionHead from '../components/SectionHead.jsx';
import Badge from '../components/Badge.jsx';
import { DIVISIONS, VENTURES, SAMPLE_POSTS } from '../data/content.js';

const STATS = [
  { num: '11', label: 'Ecosystem pillars' },
  { num: '7', label: 'Divisions, mother-operated' },
  { num: '3', label: 'Independent ventures' },
  { num: 'Y1–Y3', label: 'Phased rollout' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">The mother company</p>
          <h1 className="display">NAAD Infinity</h1>
          <p className="lede">
            <strong>NAAD Infinity is the mother company</strong> building a
            360-degree ecosystem to unify, power and monetise the modern music
            and live-entertainment lifecycle in India — bridging industry
            professionals, creators and consumers across digital media,
            physical production, commerce, education, event production and
            live experiences.
          </p>
          <div className="stat-row">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — ECOSYSTEM MAP */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            no="01"
            eyebrow="Structure"
            title="The Mother Company"
            lede={
              <>
                NAAD Infinity operates as a <strong>mother company</strong>:{' '}
                <strong>seven divisions run directly</strong> by the company,
                while <strong>three independent ventures</strong> operate
                underneath it — separate companies with their own products
                and markets, plugged into the mother company&rsquo;s
                infrastructure.
              </>
            }
          />
          <div className="eco-grid">
            <div className="eco-panel operated">
              <Badge tone="ink">Operated directly</Badge>
              <h3>Seven divisions</h3>
              <p className="muted small">
                Run by the mother company across production, rental,
                management, streaming, trade and education.
              </p>
              <ul className="eco-list">
                {DIVISIONS.map((d) => (
                  <li key={d.name}>
                    <span>{d.name}</span>
                    <span className="nic">{d.nic.replace('NIC ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="eco-panel ventures">
              <Badge> Independent ventures</Badge>
              <h3>Three ventures</h3>
              <p className="muted small">
                Independent companies under NAAD Infinity — their own
                product, their own market.
              </p>
              <ul className="eco-list">
                {VENTURES.map((v) => (
                  <li key={v.name}>
                    <span>{v.name}</span>
                    <span className="vstat">{v.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — DIVISIONS PREVIEW */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            no="02"
            eyebrow="Businesses"
            title="Seven Divisions"
            lede="Directly operated by the mother company, spanning the full lifecycle from studio to stage."
          />
          <div className="grid-3">
            {DIVISIONS.slice(0, 6).map((d) => (
              <div className="card" key={d.name}>
                <Badge tone="muted">{d.nic}</Badge>
                <h3>{d.name}</h3>
                <p>{d.tagline}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/businesses" className="btn btn-ghost">
              All seven divisions
            </Link>
          </div>
        </div>
      </section>

      {/* 03 — VENTURES SPOTLIGHT */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            no="03"
            eyebrow="Ventures"
            title="Independent Ventures"
            lede="Three separate companies under NAAD Infinity — independent products and markets, built on the mother company&rsquo;s infrastructure."
          />
          <div className="grid-3">
            {VENTURES.map((v) => (
              <div className="card venture-card" key={v.name}>
                <div className="badge-row">
                  <Badge tone={v.status === 'Live' ? 'solid' : 'muted'}>
                    {v.status}
                  </Badge>
                  <span className="nic-line" style={{ marginTop: 0 }}>{v.nic}</span>
                </div>
                <h3>{v.name}</h3>
                <p>{v.fullName}.</p>
                <div className="card-foot">
                  {v.url ? (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-brass"
                    >
                      Visit live site &#8599;
                    </a>
                  ) : (
                    <span className="faint small">Live site coming soon.</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/ventures" className="btn btn-ghost">
              About the ventures
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — NEWSROOM TEASER */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            no="04"
            eyebrow="Newsroom"
            title="Latest Dispatches"
          />
          <div className="grid-3">
            {SAMPLE_POSTS.slice(0, 3).map((p) => (
              <article className="post" key={p.title}>
                <div className="badge-row" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Badge tone="muted">Sample</Badge>
                  <span className="post-date">{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/newsroom" className="btn btn-ghost">
              Visit the newsroom
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cta-band">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h2>Build with the mother company.</h2>
          <p>
            Partnerships, investment and press enquiries — write to us and
            the right division will respond.
          </p>
          <Link to="/contact" className="btn">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

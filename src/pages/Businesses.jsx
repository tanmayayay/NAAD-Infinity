import SectionHead from '../components/SectionHead.jsx';
import Badge from '../components/Badge.jsx';
import { DIVISIONS } from '../data/content.js';

export default function Businesses() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Businesses</p>
          <h1 className="display">Seven Divisions</h1>
          <p className="lede">
            These seven divisions are <strong>operated directly by the
            mother company</strong> — NAAD Infinity&rsquo;s own businesses,
            spanning production, rental, management, streaming, trade and
            education.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <SectionHead
            no="01"
            eyebrow="Divisions"
            title="What the Mother Company Runs"
          />
          <div className="grid-2">
            {DIVISIONS.map((d, i) => (
              <div className="card" key={d.name}>
                <div className="badge-row" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Badge tone="ink">{String(i + 1).padStart(2, '0')}</Badge>
                  <Badge tone="muted">{d.nic}</Badge>
                </div>
                <h3>{d.name}</h3>
                <p>{d.description}</p>
                <ul className="offer-list">
                  {d.offerings.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

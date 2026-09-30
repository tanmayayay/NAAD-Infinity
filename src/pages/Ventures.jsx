import SectionHead from '../components/SectionHead.jsx';
import Badge from '../components/Badge.jsx';
import { VENTURES } from '../data/content.js';

export default function Ventures() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Ventures</p>
          <h1 className="display">Independent Ventures</h1>
          <p className="lede">
            Three <strong>independent ventures</strong> operate under NAAD
            Infinity — separate companies with their own products and
            markets, plugged into the mother company&rsquo;s infrastructure.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <SectionHead
            no="01"
            eyebrow="The portfolio"
            title="Three Companies, One Foundation"
          />
          <div style={{ display: 'grid', gap: 28 }}>
            {VENTURES.map((v, i) => (
              <article className="card venture-card" key={v.name}>
                <div className="badge-row">
                  <Badge tone="ink">{String(i + 1).padStart(2, '0')}</Badge>
                  <Badge tone={v.status === 'Live' ? 'solid' : 'muted'}>
                    {v.status}
                  </Badge>
                  <Badge tone="muted">{v.nic}</Badge>
                </div>
                <h3 className="section-title" style={{ marginTop: 14 }}>{v.name}</h3>
                <p className="lede" style={{ fontSize: 17 }}>{v.fullName}.</p>
                <p>{v.description}</p>
                <ul className="offer-list">
                  {v.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="card-foot">
                  <div className="visit-row">
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
                      <Badge tone="muted">In development — no public URL yet</Badge>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="note-box" style={{ marginTop: 36 }}>
            Each venture is independently operated with its own product and
            market. The mother company provides shared infrastructure —
            production, logistics, industry access and institutional backing.
          </div>
        </div>
      </section>
    </>
  );
}

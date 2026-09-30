import SectionHead from '../components/SectionHead.jsx';
import Badge from '../components/Badge.jsx';
import { PILLARS, PHASES } from '../data/content.js';

export default function About() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">About</p>
          <h1 className="display">One company,<br />the whole lifecycle.</h1>
          <p className="lede">
            NAAD Infinity exists because the music and live-entertainment
            industry runs on fragments — the studio that records the song
            never meets the stage that sells the ticket. As a{' '}
            <strong>mother company</strong>, we are building the connective
            tissue: a 360-degree ecosystem where professionals, creators
            and consumers move through one continuous lifecycle.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <SectionHead
            no="01"
            eyebrow="Mission and vision"
            title="Why We Exist"
          />
          <div className="two-col">
            <div>
              <p className="eyebrow">Mission</p>
              <p className="lede">
                To unify, power and monetise the modern music and
                live-entertainment lifecycle in India — giving every
                professional, creator and consumer a single ecosystem to
                work, create and belong to.
              </p>
            </div>
            <div>
              <p className="eyebrow">Vision</p>
              <p className="lede">
                An Indian music industry where nothing valuable happens in
                isolation: the rehearsal room, the rental warehouse, the
                box office and the classroom all run on shared
                infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            no="02"
            eyebrow="The 360-degree lifecycle"
            title="Eleven Pillars, One Loop"
            lede="Each pillar is a business in its own right. Together they form a closed loop — a song tracked in our studio can be mastered, managed, ticketed, streamed, taught and celebrated without ever leaving the ecosystem."
          />
          <div className="pillar-grid">
            {PILLARS.map((p, i) => (
              <div className="pillar" key={p}>
                <div className="p-no">{String(i + 1).padStart(2, '0')}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            no="03"
            eyebrow="Rollout"
            title="Phase-wise: Y1 to Y3"
            lede="The ecosystem is built in phases — operating depth first, platforms and commerce second, industry leadership third."
          />
          <div className="timeline">
            {PHASES.map((ph) => (
              <div className="phase" key={ph.tag}>
                <div className="phase-tag">{ph.tag}</div>
                <div>
                  <h3>{ph.title}</h3>
                  <p>{ph.text}</p>
                  <ul>
                    {ph.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="note-box" style={{ marginTop: 32 }}>
            Phase contents are indicative and will be confirmed as each
            division becomes operational.
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            no="04"
            eyebrow="Leadership"
            title="Who Leads This"
          />
          <div className="grid-3">
            {[1, 2, 3].map((i) => (
              <div className="card" key={i}>
                <Badge tone="muted">To be announced</Badge>
                <h3>Leadership — TBA</h3>
                <p>
                  Appointments to the mother company&rsquo;s leadership will
                  be announced in due course.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

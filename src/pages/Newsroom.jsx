import SectionHead from '../components/SectionHead.jsx';
import Badge from '../components/Badge.jsx';
import { SAMPLE_POSTS } from '../data/content.js';

export default function Newsroom() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Newsroom</p>
          <h1 className="display">Dispatches</h1>
          <p className="lede">
            Announcements from the mother company and its ventures.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <SectionHead
            no="01"
            eyebrow="All posts"
            title="The Record So Far"
          />
          <div className="grid-2">
            {SAMPLE_POSTS.map((p) => (
              <article className="post" key={p.title}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Badge tone="muted">Sample</Badge>
                  <span className="post-date">{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <div className="note-box" style={{ marginTop: 36 }}>
            These are sample posts illustrating the newsroom format. Formal
            announcements will be published here as the rollout proceeds.
          </div>
        </div>
      </section>
    </>
  );
}

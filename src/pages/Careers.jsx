import { Link } from 'react-router-dom';
import SectionHead from '../components/SectionHead.jsx';
import Badge from '../components/Badge.jsx';
import { ROLES } from '../data/content.js';

export default function Careers() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Careers</p>
          <h1 className="display">Work on the Ecosystem</h1>
          <p className="lede">
            NAAD Infinity is built by people who have stood in control
            rooms, on festival fields and in classrooms. We hire slowly
            and deliberately — operators first, titles second.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <SectionHead
            no="01"
            eyebrow="Culture"
            title="How We Work"
          />
          <div className="two-col">
            <p>
              The mother company runs seven operating divisions and backs
              three independent ventures. That means a career here is never
              single-track: a production hire works festival season, a
              platform engineer ships ticketing, a curator programmes the
              conference stage.
            </p>
            <p>
              We value field experience over pedigree, clear writing over
              loud meetings, and owners over attendees. If you have built
              something real in music, live events or the technology
              behind them, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            no="02"
            eyebrow="Open roles"
            title="Where We Will Hire"
          />
          <div>
            {ROLES.map((r) => (
              <div className="role-row" key={r.title}>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
                <Badge tone="muted">Opening soon</Badge>
              </div>
            ))}
          </div>
          <div className="note-box" style={{ marginTop: 36 }}>
            Formal role descriptions and applications will open here.
            Speculative introductions are welcome via the{' '}
            <Link to="/contact">contact page</Link>.
          </div>
        </div>
      </section>
    </>
  );
}

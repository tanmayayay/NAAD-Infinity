import { useState } from 'react';
import SectionHead from '../components/SectionHead.jsx';
import Badge from '../components/Badge.jsx';

const DETAILS = [
  { k: 'Office', v: 'To be confirmed' },
  { k: 'Email', v: 'To be confirmed' },
  { k: 'WhatsApp', v: 'To be confirmed' },
  { k: 'CIN', v: 'To be confirmed' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry — ${form.subject || 'NAAD Infinity'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    // Mailto fallback: no corporate address is published yet, so this opens
    // the visitor's mail client with the enquiry pre-filled, ready to address.
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Contact</p>
          <h1 className="display">Get in Touch</h1>
          <p className="lede">
            Partnerships, investment and press enquiries — write to us and
            the right part of the mother company will respond.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <SectionHead
            no="01"
            eyebrow="Enquiry"
            title="Write to Us"
          />
          <div className="contact-grid">
            <form onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" name="name" value={form.name} onChange={onChange} required />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" value={form.email} onChange={onChange} required />
              </div>
              <div className="field">
                <label htmlFor="c-subject">Subject</label>
                <input id="c-subject" name="subject" value={form.subject} onChange={onChange} placeholder="Partnership, investment, press…" />
              </div>
              <div className="field">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" value={form.message} onChange={onChange} required />
              </div>
              <button type="submit" className="btn">Send enquiry</button>
              {sent && (
                <p className="small muted" style={{ marginTop: 16 }}>
                  Your mail client should have opened with the enquiry
                  pre-filled — just address and send it.
                </p>
              )}
            </form>
            <div>
              {DETAILS.map((d) => (
                <div className="detail-row" key={d.k}>
                  <div className="k">{d.k}</div>
                  <div className="v">
                    {d.v} <Badge tone="muted">TBC</Badge>
                  </div>
                </div>
              ))}
              <div className="note-box" style={{ marginTop: 28 }}>
                Our corporate email address is to be confirmed. The form
                opens your own mail client with the enquiry pre-filled, so
                nothing is sent anywhere until you choose to send it.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

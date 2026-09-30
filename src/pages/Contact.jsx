import { useState } from 'react'
import { CONTACT } from '../data/site.js'

const SUBJECTS = ['Partnership', 'Press', 'Careers', 'Investment', 'General enquiry']

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', subject: 'Partnership', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[NAAD Infinity] ${form.subject} — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganisation: ${form.org}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow on-dark">Contact</span>
          <h1>Start a conversation.</h1>
          <p className="lede">
            Partnerships, press, careers and investment enquiries — the corporate
            office responds to every serious conversation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              {sent ? (
                <div className="info-block">
                  <h4>Thank you</h4>
                  <p>
                    Your email client should have opened with your enquiry addressed
                    to the corporate office. If it did not, please write to us
                    directly at the address listed.
                  </p>
                  <button className="btn btn-outline" type="button" onClick={() => setSent(false)}>
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label htmlFor="c-name">Full name</label>
                    <input id="c-name" required value={form.name} onChange={set('name')} placeholder="Your name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-org">Organisation</label>
                    <input id="c-org" value={form.org} onChange={set('org')} placeholder="Company / publication / institution" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-email">Email</label>
                    <input id="c-email" type="email" required value={form.email} onChange={set('email')} placeholder="you@example.com" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-subject">Subject</label>
                    <select id="c-subject" value={form.subject} onChange={set('subject')}>
                      {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-msg">Message</label>
                    <textarea id="c-msg" required value={form.message} onChange={set('message')} placeholder="How can we help?" />
                  </div>
                  <button className="btn btn-gold" type="submit">Send enquiry</button>
                  <p className="tbc" style={{ marginTop: 16 }}>
                    This form opens your email client addressed to the corporate inbox.
                  </p>
                </form>
              )}
            </div>
            <div>
              <div className="info-block">
                <h4>Corporate office</h4>
                <p>{CONTACT.office}</p>
                <p className="tbc">Address to be confirmed.</p>
              </div>
              <div className="info-block">
                <h4>Email</h4>
                <p>{CONTACT.email}</p>
                <p className="tbc">Placeholder inbox — to be confirmed.</p>
              </div>
              <div className="info-block">
                <h4>WhatsApp</h4>
                <p className="tbc">Business channel — to be announced.</p>
              </div>
              <div className="info-block">
                <h4>Company particulars</h4>
                <p className="tbc">CIN, GSTIN and registered details — to be confirmed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { useState } from 'react';
import { CONTACT } from '../data/resort';
import { isEmail } from '../lib/booking';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('A stay');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: string[] = [];
    if (name.trim().length < 2) errs.push('Please enter your name.');
    if (!isEmail(email)) errs.push('Please enter a valid email address.');
    if (message.trim().length < 10) errs.push('Please tell us a little more (at least 10 characters).');
    if (errs.length) { setErrors(errs); return; }
    setErrors([]);
    setSent(true);
  };

  return (
    <>
      <section className="page-hero">
        <img className="bg" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow" style={{ color: '#e9dfc9' }}>Contact</p>
          <h1>Write to the bay</h1>
          <p>Questions about stays, celebrations or the island? Our hosts reply within one business day.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-block">
                <h3>Reservations</h3>
                <p>{CONTACT.phone}<br />{CONTACT.hours}</p>
                <p><a href={`mailto:${CONTACT.reservations}`}>{CONTACT.reservations}</a></p>
              </div>
              <div className="info-block">
                <h3>Visit</h3>
                <p>{CONTACT.addressLines.join(', ')}.</p>
              </div>
              <div className="info-block">
                <h3>Follow along</h3>
                <p>Find us on social for news from the bay.</p>
                <div className="social-row">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">YouTube</a>
                </div>
              </div>
            </div>
            <div className="panel-card" style={{ marginTop: 0 }}>
              {sent ? (
                <div role="status">
                  <p className="eyebrow">Message noted</p>
                  <h2>Thank you, {name.split(' ')[0]}.</h2>
                  <p className="section-lede">Your message about “{topic}” has been received. We’ll reply to {email} within one business day.</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate aria-label="Contact form">
                  <h2>Send a message</h2>
                  <div className="form-grid" style={{ marginTop: '1.2rem' }}>
                    <div>
                      <label className="f-label" htmlFor="c-name">Full name *</label>
                      <input className="f-input" id="c-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                    </div>
                    <div className="form-row">
                      <div>
                        <label className="f-label" htmlFor="c-email">Email *</label>
                        <input className="f-input" id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                      </div>
                      <div>
                        <label className="f-label" htmlFor="c-topic">Topic</label>
                        <select className="f-input" id="c-topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                          <option>A stay</option>
                          <option>Honeymoon</option>
                          <option>Family gathering</option>
                          <option>Spa &amp; experiences</option>
                          <option>Something else</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="f-label" htmlFor="c-msg">Message *</label>
                      <textarea className="f-input" id="c-msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Dates you have in mind, who’s travelling, anything we should know…" />
                    </div>
                    {errors.map((er) => (<p key={er} className="field-error" role="alert">{er}</p>))}
                    <button className="btn btn-primary" type="submit">Send message</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

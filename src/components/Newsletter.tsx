import { useState } from 'react';
import { isEmail } from '../lib/booking';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setMsg({ ok: false, text: 'Please enter a valid email address.' });
      return;
    }
    setMsg({ ok: true, text: 'Thank you — you are on the list. Watch your inbox for our next letter.' });
    setEmail('');
  };

  return (
    <div className="newsletter">
      <div>
        <p className="eyebrow">Letters from the bay</p>
        <h2>Seasonal openings, slow stories, first refusal on new villas.</h2>
        <p>One letter a month. No noise — unsubscribe anytime.</p>
      </div>
      <div>
        <form className="news-form" onSubmit={submit} noValidate aria-label="Newsletter signup">
          <label htmlFor="nl-email" className="skip-link">Email address</label>
          <input id="nl-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          <button type="submit">Join</button>
        </form>
        {msg && <p className={msg.ok ? 'field-ok' : 'field-error'} role="status">{msg.text}</p>}
      </div>
    </div>
  );
}

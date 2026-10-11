import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ACCOMMODATIONS, formatUSD, getAccommodation } from '../data/resort';
import { addDaysISO, isEmail, makeReference, nightsBetween, priceBreakdown, todayISO, validateDates } from '../lib/booking';

const STEPS = ['Stay', 'Dates', 'Guests', 'Details', 'Review'];

export default function Booking() {
  const [params] = useSearchParams();
  const [step, setStep] = useState(0);
  const [roomSlug, setRoomSlug] = useState(params.get('room') ?? ACCOMMODATIONS[2].slug);
  const [checkIn, setCheckIn] = useState(params.get('checkIn') ?? todayISO());
  const [checkOut, setCheckOut] = useState(params.get('checkOut') ?? addDaysISO(todayISO(), 3));
  const [adults, setAdults] = useState(Number(params.get('adults') ?? params.get('guests') ?? 2));
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requests, setRequests] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [reference, setReference] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const room = getAccommodation(roomSlug) ?? ACCOMMODATIONS[0];
  const nights = nightsBetween(checkIn, checkOut);
  const quote = useMemo(() => priceBreakdown(room.rate, checkIn, checkOut), [room.rate, checkIn, checkOut]);
  const dateError = validateDates(checkIn, checkOut);
  const totalGuests = adults + children;
  const guestsOverCapacity = totalGuests > room.guests + 1;

  useEffect(() => { window.scrollTo(0, 0); }, [step]);

  const canNext = (): boolean => {
    if (step === 1 && dateError) return false;
    if (step === 2 && guestsOverCapacity) return false;
    return true;
  };

  const next = () => {
    if (step === 1 && dateError) { setErrors([dateError]); return; }
    if (step === 2 && guestsOverCapacity) {
      setErrors([`${room.name} sleeps ${room.guests} (+1 child on daybed). Please reduce guests or choose a larger stay.`]);
      return;
    }
    setErrors([]);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: string[] = [];
    if (!name.trim()) errs.push('Please enter the lead guest’s full name.');
    if (!isEmail(email)) errs.push('Please enter a valid email address.');
    if (phone.replace(/\D/g, '').length < 7) errs.push('Please enter a valid contact number.');
    if (dateError) errs.push(dateError);
    if (errs.length) { setErrors(errs); return; }
    setErrors([]);
    // Frontend-only submission
    setTimeout(() => {
      setReference(makeReference());
      setSubmitted(true);
      setStep(STEPS.length - 1);
      window.scrollTo(0, 0);
    }, 600);
  };

  if (submitted) {
    return (
      <section className="section"><div className="container" style={{ maxWidth: 760 }}>
        <div className="panel-card confirm">
          <div className="confirm-mark" aria-hidden="true">✓</div>
          <p className="eyebrow center" style={{ justifyContent: 'center' }}>Booking request received</p>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Thank you, {name.split(' ')[0] || 'traveler'}.</h1>
          <p className="section-lede" style={{ marginInline: 'auto' }}>
            Your request for the <strong>{room.name}</strong> · {checkIn} → {checkOut} · {quote.nights} night{quote.nights > 1 ? 's' : ''} · {totalGuests} guest{totalGuests > 1 ? 's' : ''} has been received.
            Estimated total <strong>{formatUSD(quote.total)}</strong>.
          </p>
          <p><span className="ref-box">Reference {reference}</span></p>
          <div className="info-note" role="note">
            Your booking request has been received. Our hosts will reply at <strong>{email || 'your email'}</strong> within one business day to confirm availability.
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginTop: '1.8rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-outline-dark btn-sm" to="/stay">Browse more stays</Link>
            <Link className="btn btn-primary btn-sm" to="/">Return home</Link>
          </div>
        </div>
      </div></section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <img className="bg" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow" style={{ color: '#e9dfc9' }}>Reservations</p>
          <h1>Book your stay</h1>
          <p>A calm five-step request — no payment details, no surprises. Estimated totals update as you choose.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <ol className="steps" aria-label="Booking progress" style={{ listStyle: 'none', padding: 0, margin: '2rem 0 0' }}>
            {STEPS.map((s, i) => (
              <li key={s} className={`step-tab${i === step ? ' current' : ''}${i < step ? ' done' : ''}`} aria-current={i === step ? 'step' : undefined}>
                {i + 1}. {s}{i < step ? ' ✓' : ''}
              </li>
            ))}
          </ol>
          <div className="wizard">
            <div>
              <div className="panel-card" aria-live="polite">
                {step === 0 && (
                  <div>
                    <h2>1 · Select accommodation</h2>
                    <p className="section-lede">All rates are per night and include breakfast.</p>
                    <div className="accom-pick" role="group" aria-label="Choose accommodation">
                      {ACCOMMODATIONS.map((a) => (
                        <button key={a.slug} className="accom-option" aria-pressed={roomSlug === a.slug} onClick={() => setRoomSlug(a.slug)}>
                          <img src={a.images[0].src} alt="" aria-hidden="true" loading="lazy" />
                          <span>
                            <h4>{a.name}</h4>
                            <p>Sleeps {a.guests} · {a.beds}</p>
                          </span>
                          <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem' }}>{formatUSD(a.rate)}<small style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'var(--muted)' }}>/nt</small></strong>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div>
                    <h2>2 · Choose dates</h2>
                    <p className="section-lede">Check-in from 3:00 pm · check-out until 11:00 am.</p>
                    <div className="form-grid" style={{ marginTop: '1.4rem' }}>
                      <div className="form-row">
                        <div>
                          <label className="f-label" htmlFor="b-in">Check-in</label>
                          <input className="f-input" id="b-in" type="date" value={checkIn} min={todayISO()} onChange={(e) => setCheckIn(e.target.value)} />
                        </div>
                        <div>
                          <label className="f-label" htmlFor="b-out">Check-out</label>
                          <input className="f-input" id="b-out" type="date" value={checkOut} min={addDaysISO(checkIn || todayISO(), 1)} onChange={(e) => setCheckOut(e.target.value)} />
                        </div>
                      </div>
                      {dateError
                        ? <p className="field-error" role="alert">{dateError}</p>
                        : <p className="field-ok" role="status">{nights} night{nights > 1 ? 's' : ''} selected · {formatUSD(room.rate)} × {nights} = {formatUSD(quote.subtotal)}</p>}
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <h2>3 · Guests</h2>
                    <p className="section-lede">{room.name} sleeps {room.guests}. One extra child on a daybed can be arranged.</p>
                    <div className="form-grid" style={{ marginTop: '1.4rem' }}>
                      <div className="form-row">
                        <div>
                          <label className="f-label" htmlFor="b-adults">Adults</label>
                          <select className="f-input" id="b-adults" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                            {[1, 2, 3, 4, 5, 6].map((n) => (<option key={n} value={n}>{n}</option>))}
                          </select>
                        </div>
                        <div>
                          <label className="f-label" htmlFor="b-kids">Children</label>
                          <select className="f-input" id="b-kids" value={children} onChange={(e) => setChildren(Number(e.target.value))}>
                            {[0, 1, 2, 3].map((n) => (<option key={n} value={n}>{n}</option>))}
                          </select>
                        </div>
                      </div>
                      {guestsOverCapacity && <p className="field-error" role="alert">That exceeds this stay’s capacity. Consider the Grand Horizon Residence (sleeps 6).</p>}
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <form onSubmit={(e) => { e.preventDefault(); next(); }} id="guest-form">
                    <h2>4 · Guest information</h2>
                    <p className="section-lede">We only ask for what our hosts need to confirm a request.</p>
                    <div className="form-grid" style={{ marginTop: '1.4rem' }}>
                      <div>
                        <label className="f-label" htmlFor="g-name">Full name *</label>
                        <input className="f-input" id="g-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Alexandra Moreau" />
                      </div>
                      <div className="form-row">
                        <div>
                          <label className="f-label" htmlFor="g-email">Email *</label>
                          <input className="f-input" id="g-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="you@example.com" />
                        </div>
                        <div>
                          <label className="f-label" htmlFor="g-phone">Contact number *</label>
                          <input className="f-input" id="g-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="+1 555 000 1234" />
                        </div>
                      </div>
                      <div>
                        <label className="f-label" htmlFor="g-req">Special requests (optional)</label>
                        <textarea className="f-input" id="g-req" value={requests} onChange={(e) => setRequests(e.target.value)} placeholder="Anniversary, dietary needs, high floor, quiet villa…" />
                      </div>
                    </div>
                  </form>
                )}
                {step === 4 && (
                  <form onSubmit={submit}>
                    <h2>5 · Review &amp; submit</h2>
                    <p className="section-lede">Check everything once — then send your request.</p>
                    <table className="spec-table">
                      <tbody>
                        <tr><th scope="row">Stay</th><td>{room.name} · {formatUSD(room.rate)}/night</td></tr>
                        <tr><th scope="row">Dates</th><td>{checkIn} → {checkOut} ({quote.nights} night{quote.nights !== 1 ? 's' : ''})</td></tr>
                        <tr><th scope="row">Guests</th><td>{adults} adult{adults > 1 ? 's' : ''}{children ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}</td></tr>
                        <tr><th scope="row">Guest</th><td>{name || '—'} · {email || '—'} · {phone || '—'}</td></tr>
                        {requests && <tr><th scope="row">Requests</th><td>{requests}</td></tr>}
                      </tbody>
                    </table>
                    {errors.length > 0 && (
                      <div role="alert" style={{ marginTop: '1rem' }}>
                        {errors.map((er) => (<p key={er} className="field-error">{er}</p>))}
                      </div>
                    )}
                    <div className="info-note">Submitting creates your booking reference. No payment is taken now — we confirm availability first.</div>
                    <button className="btn btn-primary" type="submit" style={{ marginTop: '1.2rem', width: '100%' }}>Submit booking request</button>
                  </form>
                )}
                {errors.length > 0 && step !== 4 && (
                  <div role="alert" style={{ marginTop: '1rem' }}>
                    {errors.map((er) => (<p key={er} className="field-error">{er}</p>))}
                  </div>
                )}
              </div>
              {step !== 4 && (
                <div className="wizard-nav">
                  <button className="btn btn-quiet btn-sm" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>Back</button>
                  {step === 3
                    ? <button className="btn btn-primary btn-sm" onClick={() => {
                        const errs: string[] = [];
                        if (!name.trim()) errs.push('Please enter the lead guest’s full name.');
                        if (!isEmail(email)) errs.push('Please enter a valid email address.');
                        if (phone.replace(/\D/g, '').length < 7) errs.push('Please enter a valid contact number.');
                        if (errs.length) { setErrors(errs); return; }
                        setErrors([]); next();
                      }}>Review booking</button>
                    : <button className="btn btn-primary btn-sm" onClick={next} disabled={!canNext()}>Continue</button>}
                </div>
              )}
              {step === 4 && (
                <div className="wizard-nav">
                  <button className="btn btn-quiet btn-sm" onClick={() => setStep(3)}>Back to details</button>
                </div>
              )}
            </div>
            <aside className="summary-card" aria-label="Booking summary">
              <h3>Your summary</h3>
              <img className="sum-img" src={room.images[0].src} alt="" aria-hidden="true" />
              <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem' }}>{room.name}</strong>
              <dl>
                <div><dt>Check-in</dt><dd>{checkIn || '—'}</dd></div>
                <div><dt>Check-out</dt><dd>{checkOut || '—'}</dd></div>
                <div><dt>Nights</dt><dd>{quote.nights}</dd></div>
                <div><dt>Guests</dt><dd>{totalGuests}</dd></div>
              </dl>
              <div style={{ borderTop: '1px solid rgba(250,247,240,0.25)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{formatUSD(room.rate)} × {quote.nights}n</span><span>{formatUSD(quote.subtotal)}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Service 12%*</span><span>{formatUSD(quote.service)}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Cleaning*</span><span>{formatUSD(quote.cleaning)}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', marginTop: '0.5rem' }}><strong>Total</strong><strong>{formatUSD(quote.total)}</strong></div>
                <p style={{ fontSize: '0.78rem', opacity: 0.7 }}>* Service and cleaning fees included where noted.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

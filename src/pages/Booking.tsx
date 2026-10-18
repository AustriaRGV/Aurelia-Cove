import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BOOKABLE_GROUPS, formatPHP, type TripType, bookablesFor } from '../data/resort';
import { addDaysISO, isEmail, makeReference, nightsBetween, quoteFor, todayISO, tripLabel, validateDates, validateDayDate } from '../lib/booking';

const STEPS = ['Details', 'Dates', 'Guests', 'Contact', 'Review'];

export default function Booking() {
  const [params] = useSearchParams();
  const [step, setStep] = useState(0);

  const initialTrip: TripType = params.get('trip') === 'day' ? 'day' : 'overnight';
  const [trip, setTrip] = useState<TripType>(initialTrip);
  const [pickId, setPickId] = useState(params.get('pick') ?? (params.get('room') ? `room:${params.get('room')}` : ''));
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

  const options = useMemo(() => bookablesFor(trip), [trip]);
  const item = options.find((o) => o.id === pickId) ?? options[0];
  const nights = trip === 'overnight' ? nightsBetween(checkIn, checkOut) : 0;
  const dateError = trip === 'overnight' ? validateDates(checkIn, checkOut) : validateDayDate(checkIn);
  const totalGuests = adults + children;
  const overCapacity = totalGuests > item.capacity;

  const quote = useMemo(
    () => quoteFor({ unit: item.unit, rate: item.rate, isRoom: item.kind === 'room' }, { trip, nights, persons: totalGuests }),
    [item, trip, nights, totalGuests],
  );

  useEffect(() => { window.scrollTo(0, 0); }, [step]);

  const switchTrip = (next: TripType) => {
    if (next === trip) return;
    setTrip(next);
    setPickId('');
    setErrors([]);
  };

  const dateSummary = trip === 'overnight'
    ? `${checkIn} → ${checkOut}`
    : checkIn;

  const canNext = (): boolean => {
    if (step === 1 && dateError) return false;
    if (step === 2 && overCapacity) return false;
    return true;
  };

  const next = () => {
    if (step === 1 && dateError) { setErrors([dateError]); return; }
    if (step === 2 && overCapacity) {
      setErrors([`${item.name} accommodates ${item.capacity}. Please reduce guests or choose a larger stay.`]);
      return;
    }
    setErrors([]);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const validateContact = (): string[] => {
    const errs: string[] = [];
    if (!name.trim()) errs.push('Please enter the lead guest’s full name.');
    if (!isEmail(email)) errs.push('Please enter a valid email address.');
    if (phone.replace(/\D/g, '').length < 7) errs.push('Please enter a valid contact number.');
    return errs;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = [...validateContact(), ...(dateError ? [dateError] : [])];
    if (errs.length) { setErrors(errs); return; }
    setErrors([]);
    // Frontend-only submission — nothing is stored or charged.
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
          <p className="eyebrow center" style={{ justifyContent: 'center' }}>Inquiry received</p>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Thank you, {name.split(' ')[0] || 'traveler'}.</h1>
          <p className="section-lede" style={{ marginInline: 'auto' }}>
            Your request for the <strong>{item.name}</strong> · {tripLabel(trip)} · {dateSummary} · {totalGuests} guest{totalGuests > 1 ? 's' : ''}
            {quote.total > 0 && <> · estimated total <strong>{formatPHP(quote.total)}</strong></>} has been received.
          </p>
          <p><span className="ref-box">Reference {reference}</span></p>
          <div className="info-note" role="note">
            Your reservation request has been received. Availability is confirmed manually by our hosts —
            we’ll reply to <strong>{email || 'your email'}</strong> within one business day. No payment has been taken.
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginTop: '1.8rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-outline-dark btn-sm" to="/rates">View all rates</Link>
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
          <h1>Send a reservation request</h1>
          <p>
            Overnight stays and day tours, all in one form. Nothing is charged here — our hosts confirm
            availability and the final rate personally.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <ol className="steps" aria-label="Reservation progress" style={{ listStyle: 'none', padding: 0, margin: '2rem 0 0' }}>
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
                    <h2>1 · What would you like to book?</h2>
                    <p className="section-lede">
                      Choose an overnight stay, or a single day by the water. Then pick your room, cottage, tour or package.
                    </p>

                    <div className="trip-toggle" role="group" aria-label="Type of booking">
                      <button type="button" aria-pressed={trip === 'overnight'} onClick={() => switchTrip('overnight')}>
                        <strong>Overnight stay</strong>
                        <span>Check-in and check-out dates</span>
                      </button>
                      <button type="button" aria-pressed={trip === 'day'} onClick={() => switchTrip('day')}>
                        <strong>Day tour</strong>
                        <span>A single day, no overnight</span>
                      </button>
                    </div>

                    <p className="pick-hint" id="pick-hint">Preferred room, cottage or package — pick one to continue.</p>

                    <div className="pick-groups">
                      {BOOKABLE_GROUPS[trip].map((group) => {
                        const list = options.filter((o) => o.kind === group.kind);
                        if (list.length === 0) return null;
                        return (
                          <fieldset className="pick-group" key={group.kind}>
                            <legend>
                              <span>{group.title}</span>
                              <small>{group.note}</small>
                            </legend>
                            <div className="accom-pick">
                              {list.map((o) => (
                                <button
                                  key={o.id}
                                  type="button"
                                  className="accom-option"
                                  aria-pressed={item.id === o.id}
                                  onClick={() => setPickId(o.id)}
                                >
                                  <img src={o.image} alt="" aria-hidden="true" loading="lazy" />
                                  <span>
                                    <h4>{o.name}</h4>
                                    <p>{o.label} · {o.note}</p>
                                  </span>
                                  <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem' }}>
                                    {formatPHP(o.rate)}
                                    <small style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'var(--muted)', marginLeft: '0.25rem' }}>
                                      {o.unit === 'night' ? '/nt' : o.unit === 'day' ? '/day' : o.unit === 'person' ? '/pax' : ''}
                                    </small>
                                  </strong>
                                </button>
                              ))}
                            </div>
                          </fieldset>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h2>2 · {trip === 'overnight' ? 'Choose your dates' : 'Choose your day'}</h2>
                    <p className="section-lede">
                      {trip === 'overnight'
                        ? 'Check-in from 3:00 pm · check-out until 11:00 am.'
                        : 'Day use runs 8:00 am to 5:00 pm. Cottages and tours are held for your group on this date.'}
                    </p>
                    <div className="form-grid" style={{ marginTop: '1.4rem' }}>
                      {trip === 'overnight' ? (
                        <div className="form-row">
                          <div>
                            <label className="f-label" htmlFor="b-in">Check-in date</label>
                            <input className="f-input" id="b-in" type="date" value={checkIn} min={todayISO()} onChange={(e) => setCheckIn(e.target.value)} />
                          </div>
                          <div>
                            <label className="f-label" htmlFor="b-out">Check-out date</label>
                            <input className="f-input" id="b-out" type="date" value={checkOut} min={addDaysISO(checkIn || todayISO(), 1)} onChange={(e) => setCheckOut(e.target.value)} />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <label className="f-label" htmlFor="b-day">Day-tour date</label>
                          <input className="f-input" id="b-day" type="date" value={checkIn} min={todayISO()} onChange={(e) => setCheckIn(e.target.value)} />
                        </div>
                      )}
                      {dateError
                        ? <p className="field-error" role="alert">{dateError}</p>
                        : (
                          <p className="field-ok" role="status">
                            {trip === 'overnight'
                              ? `${nights} night${nights > 1 ? 's' : ''} selected · ${item.unit === 'flat' ? `package price ${formatPHP(quote.subtotal)}` : `${formatPHP(item.rate)} × ${nights} = ${formatPHP(quote.subtotal)}`}`
                              : `${item.label} for ${totalGuests} guest${totalGuests > 1 ? 's' : ''} · ${item.unit === 'flat' ? `package price ${formatPHP(quote.subtotal)}` : `${formatPHP(quote.subtotal)} estimated`}`}
                          </p>
                        )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2>3 · How many guests?</h2>
                    <p className="section-lede">{item.name} accommodates {item.capacity}. Tell us who’s coming so we can set the space up properly.</p>
                    <div className="form-grid" style={{ marginTop: '1.4rem' }}>
                      <div className="form-row">
                        <div>
                          <label className="f-label" htmlFor="b-adults">Adults</label>
                          <select className="f-input" id="b-adults" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                            {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (<option key={n} value={n}>{n}</option>))}
                          </select>
                        </div>
                        <div>
                          <label className="f-label" htmlFor="b-kids">Children</label>
                          <select className="f-input" id="b-kids" value={children} onChange={(e) => setChildren(Number(e.target.value))}>
                            {[0, 1, 2, 3, 4].map((n) => (<option key={n} value={n}>{n}</option>))}
                          </select>
                        </div>
                      </div>
                      {overCapacity && <p className="field-error" role="alert">That exceeds what {item.name} can host ({item.capacity}). Please reduce the party size or choose a larger stay.</p>}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <form onSubmit={(e) => { e.preventDefault(); next(); }} id="guest-form">
                    <h2>4 · Your details</h2>
                    <p className="section-lede">We only ask for what our hosts need to confirm the request.</p>
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
                          <input className="f-input" id="g-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="+63 917 000 0000" />
                        </div>
                      </div>
                      <div>
                        <label className="f-label" htmlFor="g-req">Special requests (optional)</label>
                        <textarea className="f-input" id="g-req" value={requests} onChange={(e) => setRequests(e.target.value)} placeholder="Celebration, dietary needs, early check-in, cot needed, arrival boat time…" />
                      </div>
                    </div>
                  </form>
                )}

                {step === 4 && (
                  <form onSubmit={submit}>
                    <h2>5 · Review &amp; send</h2>
                    <p className="section-lede">Check everything once — then send your request.</p>
                    <table className="spec-table">
                      <tbody>
                        <tr><th scope="row">Booking type</th><td>{tripLabel(trip)}</td></tr>
                        <tr><th scope="row">Selection</th><td>{item.label} · {item.name} · {formatPHP(item.rate)}{item.unit === 'night' ? ' / night' : item.unit === 'day' ? ' / day' : item.unit === 'person' ? ' / person' : ''}</td></tr>
                        <tr><th scope="row">Dates</th><td>{dateSummary}{trip === 'overnight' ? ` (${quote.units} night${quote.units !== 1 ? 's' : ''})` : ''}</td></tr>
                        <tr><th scope="row">Guests</th><td>{adults} adult{adults > 1 ? 's' : ''}{children ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}</td></tr>
                        <tr><th scope="row">Guest</th><td>{name || '—'} · {email || '—'} · {phone || '—'}</td></tr>
                        {requests && <tr><th scope="row">Special requests</th><td>{requests}</td></tr>}
                        <tr><th scope="row">Estimate</th><td>{formatPHP(quote.total)} <small style={{ color: 'var(--muted)' }}>(incl. 12% service charge{quote.cleaning > 0 ? ' + cleaning fee' : ''})</small></td></tr>
                      </tbody>
                    </table>
                    {errors.length > 0 && (
                      <div role="alert" style={{ marginTop: '1rem' }}>
                        {errors.map((er) => (<p key={er} className="field-error">{er}</p>))}
                      </div>
                    )}
                    <div className="info-note">Submitting creates your reference number. Availability is confirmed manually — no payment is taken now.</div>
                    <button className="btn btn-primary" type="submit" style={{ marginTop: '1.2rem', width: '100%' }}>Send reservation request</button>
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
                        const errs = validateContact();
                        if (errs.length) { setErrors(errs); return; }
                        setErrors([]); next();
                      }}>Review request</button>
                    : <button className="btn btn-primary btn-sm" onClick={next} disabled={!canNext()}>Continue</button>}
                </div>
              )}
              {step === 4 && (
                <div className="wizard-nav">
                  <button className="btn btn-quiet btn-sm" onClick={() => setStep(3)}>Back to details</button>
                </div>
              )}
            </div>

            <aside className="summary-card" aria-label="Reservation summary">
              <h3>Your request</h3>
              <img className="sum-img" src={item.image} alt="" aria-hidden="true" />
              <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem' }}>{item.name}</strong>
              <p style={{ fontSize: '0.82rem', opacity: 0.75, marginTop: '0.3rem' }}>{item.label} · {tripLabel(trip)}</p>
              <dl>
                <div><dt>{trip === 'overnight' ? 'Check-in' : 'Date'}</dt><dd>{checkIn || '—'}</dd></div>
                {trip === 'overnight' && <div><dt>Check-out</dt><dd>{checkOut || '—'}</dd></div>}
                <div><dt>{trip === 'overnight' ? 'Nights' : 'Guests'}</dt><dd>{trip === 'overnight' ? quote.units : totalGuests}</dd></div>
                <div><dt>Total guests</dt><dd>{totalGuests}</dd></div>
              </dl>
              <div style={{ borderTop: '1px solid rgba(250,247,240,0.25)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{item.unit === 'flat' ? 'Package price' : `${formatPHP(item.rate)} × ${quote.unitLabel}`}</span>
                  <span>{formatPHP(quote.subtotal)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Service 12%*</span><span>{formatPHP(quote.service)}</span></div>
                {quote.cleaning > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Cleaning*</span><span>{formatPHP(quote.cleaning)}</span></div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', marginTop: '0.5rem' }}><strong>Estimate</strong><strong>{formatPHP(quote.total)}</strong></div>
                <p style={{ fontSize: '0.78rem', opacity: 0.7 }}>* Estimate only — our hosts confirm the final rate. No payment is taken online.</p>
              </div>
              <Link className="btn btn-outline btn-sm" to="/contact" style={{ marginTop: '1rem', width: '100%' }}>Message us instead</Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ACCOMMODATIONS, formatUSD, getAccommodation } from '../data/resort';
import RoomCard from '../components/RoomCard';
import { addDaysISO, priceBreakdown, todayISO, validateDates } from '../lib/booking';

export default function RoomDetails() {
  const { slug } = useParams();
  const room = getAccommodation(slug);
  const [checkIn, setCheckIn] = useState(todayISO());
  const [checkOut, setCheckOut] = useState(addDaysISO(todayISO(), 2));
  const [adults, setAdults] = useState(2);
  const [active, setActive] = useState(0);

  const dateError = validateDates(checkIn, checkOut);
  const quote = useMemo(
    () => (room ? priceBreakdown(room.rate, checkIn, checkOut) : null),
    [room, checkIn, checkOut]
  );

  if (!room) {
    return (
      <section className="section"><div className="container">
        <h1>Stay not found</h1>
        <p className="section-lede">That accommodation does not exist.</p>
        <p style={{ marginTop: '1rem' }}><Link className="btn btn-primary btn-sm" to="/stay">Back to Stay</Link></p>
      </div></section>
    );
  }

  const similar = ACCOMMODATIONS.filter((a) => a.slug !== room.slug).slice(0, 2);
  const guestsExceeded = adults > room.guests;

  return (
    <>
      <section className="page-hero">
        <img className="bg" src={room.images[0].src} alt="" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow" style={{ color: '#e9dfc9' }}>Stay · {room.view}</p>
          <h1>{room.name}</h1>
          <p>{room.tagline} — from {formatUSD(room.rate)} per night. Sleeps {room.guests} · {room.beds}.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="detail-grid">
            <div className="detail-body">
              <div className="detail-gallery" role="group" aria-label={`${room.name} photo gallery`}>
                {room.images.map((im, i) => (
                  <figure key={im.src} style={i === active ? { outline: '2px solid var(--forest)' } : undefined}>
                    <img src={im.src} alt={im.alt} loading={i === 0 ? 'eager' : 'lazy'} style={{ minHeight: i === 0 ? 420 : 200 }} onClick={() => setActive(i)} />
                  </figure>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.8rem' }} role="tablist" aria-label="Choose featured photo">
                {room.images.map((im, i) => (
                  <button key={im.src} className="chip" role="tab" aria-selected={active === i} aria-pressed={active === i} onClick={() => setActive(i)}>Photo {i + 1}</button>
                ))}
              </div>
              {room.longDescription.map((p) => (<p key={p.slice(0, 24)}>{p}</p>))}
              <h2>Details</h2>
              <table className="spec-table">
                <tbody>
                  <tr><th scope="row">Sleeps</th><td>Up to {room.guests} guests · {room.beds}</td></tr>
                  <tr><th scope="row">Size &amp; outlook</th><td>{room.size} · {room.view}</td></tr>
                  <tr><th scope="row">Check-in / out</th><td>From 3:00 pm · Until 11:00 am · Early arrival on request</td></tr>
                  <tr><th scope="row">Nightly rate</th><td>{formatUSD(room.rate)}, breakfast included</td></tr>
                </tbody>
              </table>
              <h2>What&apos;s included</h2>
              <ul className="amen-list">
                {room.amenities.map((a) => (<li key={a}>{a}</li>))}
              </ul>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.6rem' }}>
                {room.features.map((f) => (
                  <div key={f.title} style={{ border: '1px solid var(--line)', padding: '1.2rem', background: '#fff' }}>
                    <h3 style={{ fontSize: '1.25rem' }}>{f.title}</h3>
                    <p style={{ fontSize: '0.92rem' }}>{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="book-card" aria-label="Booking estimate">
              <p className="eyebrow">Reserve</p>
              <p className="rate">{formatUSD(room.rate)} <small>/ night</small></p>
              <div className="form-grid">
                <div className="form-row">
                  <div>
                    <label className="f-label" htmlFor="d-in">Check-in</label>
                    <input className="f-input" id="d-in" type="date" value={checkIn} min={todayISO()} onChange={(e) => setCheckIn(e.target.value)} />
                  </div>
                  <div>
                    <label className="f-label" htmlFor="d-out">Check-out</label>
                    <input className="f-input" id="d-out" type="date" value={checkOut} min={addDaysISO(checkIn || todayISO(), 1)} onChange={(e) => setCheckOut(e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="f-label" htmlFor="d-adults">Adults</label>
                  <select className="f-input" id="d-adults" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                    {[1, 2, 3, 4, 5, 6].map((n) => (<option key={n} value={n}>{n} adult{n > 1 ? 's' : ''}</option>))}
                  </select>
                </div>
                {dateError && <p className="field-error" role="alert">{dateError}</p>}
                {guestsExceeded && <p className="field-error" role="alert">This stay sleeps {room.guests}. Please choose a larger villa for {adults} adults.</p>}
                {quote && !dateError && (
                  <div className="price-lines" aria-live="polite">
                    <div><span>{formatUSD(room.rate)} × {quote.nights} night{quote.nights > 1 ? 's' : ''}</span><span>{formatUSD(quote.subtotal)}</span></div>
                    <div><span>Service charge (12%)</span><span>{formatUSD(quote.service)}</span></div>
                    <div><span>Cleaning fee</span><span>{formatUSD(quote.cleaning)}</span></div>
                    <div className="price-total"><span>Estimated total</span><strong>{formatUSD(quote.total)}</strong></div>
                  </div>
                )}
                <Link
                  className="btn btn-primary"
                  to={`/booking?room=${room.slug}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}`}
                  aria-disabled={!!dateError || guestsExceeded}
                  onClick={(e) => { if (dateError || guestsExceeded) e.preventDefault(); }}
                  style={dateError || guestsExceeded ? { opacity: 0.55, pointerEvents: 'auto' } : undefined}
                >
                  Continue to booking
                </Link>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Availability is confirmed on request — our team will reply shortly.</p>
              </div>
            </aside>
          </div>
          <h2 style={{ marginTop: '4rem', fontSize: '2rem' }}>You may also like</h2>
          <div className="stay-grid" style={{ marginTop: '1.5rem' }}>
            {similar.map((r) => (<RoomCard key={r.slug} room={r} />))}
          </div>
        </div>
      </section>
    </>
  );
}

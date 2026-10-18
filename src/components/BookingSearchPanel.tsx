import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCOMMODATIONS, COTTAGES } from '../data/resort';
import { addDaysISO, todayISO } from '../lib/booking';

export default function BookingSearchPanel() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(todayISO());
  const [checkOut, setCheckOut] = useState(addDaysISO(todayISO(), 3));
  const [guests, setGuests] = useState('2');
  const [pick, setPick] = useState('any');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) { setError('Please choose both dates.'); return; }
    if (checkOut <= checkIn) { setError('Check-out must be after check-in.'); return; }
    setError('');
    const q = new URLSearchParams({
      trip: 'overnight',
      checkIn,
      checkOut,
      guests,
      ...(pick !== 'any' ? { pick } : {}),
    });
    navigate(`/booking?${q.toString()}`);
  };

  return (
    <form className="booking-panel" id="availability" onSubmit={submit} aria-label="Check availability" style={{ scrollMarginTop: '6rem' }}>
      <div className="booking-field">
        <label htmlFor="bp-in">Check-in</label>
        <input id="bp-in" type="date" value={checkIn} min={todayISO()} onChange={(e) => setCheckIn(e.target.value)} required />
      </div>
      <div className="booking-field">
        <label htmlFor="bp-out">Check-out</label>
        <input id="bp-out" type="date" value={checkOut} min={addDaysISO(checkIn || todayISO(), 1)} onChange={(e) => setCheckOut(e.target.value)} required />
      </div>
      <div className="booking-field">
        <label htmlFor="bp-guests">Guests</label>
        <select id="bp-guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
          {['1', '2', '3', '4', '5', '6', '8', '10'].map((n) => (
            <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>
          ))}
        </select>
      </div>
      <div className="booking-field">
        <label htmlFor="bp-room">Preferred stay</label>
        <select id="bp-room" value={pick} onChange={(e) => setPick(e.target.value)}>
          <option value="any">Any type</option>
          <optgroup label="Rooms & villas">
            {ACCOMMODATIONS.map((a) => (<option key={a.slug} value={`room:${a.slug}`}>{a.name}</option>))}
          </optgroup>
          <optgroup label="Cottages">
            {COTTAGES.map((c) => (<option key={c.slug} value={`cottage:${c.slug}:night`}>{c.name}</option>))}
          </optgroup>
        </select>
      </div>
      <div className="booking-field action">
        <button className="btn btn-gold" type="submit">Check Availability</button>
      </div>
      {error && <p className="field-error" role="alert" style={{ padding: '0.6rem 1.4rem' }}>{error}</p>}
    </form>
  );
}

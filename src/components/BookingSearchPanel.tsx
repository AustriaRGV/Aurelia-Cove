import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCOMMODATIONS } from '../data/resort';
import { addDaysISO, todayISO } from '../lib/booking';

export default function BookingSearchPanel() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(todayISO());
  const [checkOut, setCheckOut] = useState(addDaysISO(todayISO(), 3));
  const [guests, setGuests] = useState('2');
  const [room, setRoom] = useState('any');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) { setError('Please choose both dates.'); return; }
    if (checkOut <= checkIn) { setError('Check-out must be after check-in.'); return; }
    setError('');
    const q = new URLSearchParams({ checkIn, checkOut, guests, ...(room !== 'any' ? { room } : {}) });
    navigate(`/booking?${q.toString()}`);
  };

  return (
    <form className="booking-panel" onSubmit={submit} aria-label="Search availability">
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
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
          <option value="6">6 guests</option>
        </select>
      </div>
      <div className="booking-field">
        <label htmlFor="bp-room">Accommodation</label>
        <select id="bp-room" value={room} onChange={(e) => setRoom(e.target.value)}>
          <option value="any">Any type</option>
          {ACCOMMODATIONS.map((a) => (<option key={a.slug} value={a.slug}>{a.name}</option>))}
        </select>
      </div>
      <div className="booking-field action">
        <button className="btn btn-gold" type="submit">Check availability</button>
      </div>
      {error && <p className="field-error" role="alert" style={{ padding: '0.6rem 1.4rem' }}>{error}</p>}
    </form>
  );
}

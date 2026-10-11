import { useMemo, useState } from 'react';
import { ACCOMMODATIONS } from '../data/resort';
import RoomCard from '../components/RoomCard';

type Sort = 'recommended' | 'price-asc' | 'price-desc' | 'guests';

export default function Stay() {
  const [guestFilter, setGuestFilter] = useState('any');
  const [sort, setSort] = useState<Sort>('recommended');

  const rooms = useMemo(() => {
    let list = [...ACCOMMODATIONS];
    if (guestFilter !== 'any') list = list.filter((r) => r.guests >= Number(guestFilter));
    switch (sort) {
      case 'price-asc': list.sort((a, b) => a.rate - b.rate); break;
      case 'price-desc': list.sort((a, b) => b.rate - a.rate); break;
      case 'guests': list.sort((a, b) => b.guests - a.guests); break;
      default: break;
    }
    return list;
  }, [guestFilter, sort]);

  return (
    <>
      <section className="page-hero">
        <img className="bg" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow" style={{ color: '#e9dfc9' }}>Stay</p>
          <h1>Choose your pace of quiet</h1>
          <p>Four accommodation types across gardens, shoreline and clifftop. All rates are per night and include breakfast.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter and sort accommodation">
            <div>
              <label id="gf-label">Sleeps at least</label>
              <div className="chip-row" role="group" aria-labelledby="gf-label" style={{ marginTop: '0.5rem' }}>
                {['any', '2', '3', '4', '6'].map((g) => (
                  <button key={g} className="chip" aria-pressed={guestFilter === g} onClick={() => setGuestFilter(g)}>
                    {g === 'any' ? 'Any' : `${g}+`}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <label htmlFor="sort">Sort by</label>
              <br />
              <select id="sort" className="sort-select" value={sort} onChange={(e) => setSort(e.target.value as Sort)} style={{ marginTop: '0.5rem' }}>
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="guests">Sleeps most</option>
              </select>
            </div>
          </div>
          {rooms.length === 0 ? (
            <p className="section-lede">No stays match that filter. Try fewer guests.</p>
          ) : (
            <div className="stay-grid">
              {rooms.map((r) => (<RoomCard key={r.slug} room={r} />))}
            </div>
          )}
          <p style={{ marginTop: '2rem', fontSize: '0.88rem', color: 'var(--muted)' }}>
            Check-in 3:00 pm · Check-out 11:00 am. Rates are per night and exclude the itemized service charge shown at booking.
          </p>
        </div>
      </section>
    </>
  );
}

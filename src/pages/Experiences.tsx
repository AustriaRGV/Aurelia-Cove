import { Link } from 'react-router-dom';
import { EXPERIENCES } from '../data/resort';

const DAY = [
  { time: '06:30', title: 'Sunrise shala', text: 'Breathwork and salutations as the bay turns silver.' },
  { time: '09:30', title: 'Reef morning', text: 'Snorkeling over Turtle Reef with marine guides.' },
  { time: '13:00', title: 'Long lunch', text: 'Grill, garden salads and naps in the pavilion shade.' },
  { time: '17:00', title: 'Golden cruise', text: 'Our wooden sloop slips past the headlands at sunset.' },
  { time: '19:30', title: 'Tide-edge dinner', text: 'Lanterns, day-boat catch and bare feet in the sand.' },
];

export default function Experiences() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow" style={{ color: '#e9dfc9' }}>Experiences</p>
          <h1>Four rituals, one slow island day</h1>
          <p>Spa, reef, table and tide — each arranged privately, each unhurried.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="exp-layout" style={{ marginTop: 0 }}>
            {EXPERIENCES.map((e) => (
              <article className="exp-item" key={e.title}>
                <img src={e.image} alt={e.alt} loading="lazy" />
                <div className="exp-copy">
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                  <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{e.meta}</span>
                </div>
              </article>
            ))}
          </div>
          <h2 style={{ marginTop: '4rem', fontSize: '2.2rem' }}>A day at the cove</h2>
          <table className="spec-table" style={{ marginTop: '1rem' }}>
            <tbody>
              {DAY.map((d) => (
                <tr key={d.time}><th scope="row">{d.time}</th><td><strong>{d.title}</strong> — {d.text}</td></tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary btn-sm" to="/booking">Book your stay</Link>
            <Link className="btn btn-outline-dark btn-sm" to="/contact">Ask about experiences</Link>
          </div>
        </div>
      </section>
    </>
  );
}

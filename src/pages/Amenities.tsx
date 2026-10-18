import { Link } from 'react-router-dom';
import { AMENITIES } from '../data/resort';
import AmenityIcon from '../components/AmenityIcon';

export default function Amenities() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow" style={{ color: '#e9dfc9' }}>Amenities</p>
          <h1>Considered, quiet, close by</h1>
          <p>Eight reasons to never leave the grounds — unless the reef calls.</p>
        </div>
      </section>
      <section className="section band" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="amen-grid" style={{ marginTop: 0 }}>
            {AMENITIES.map((a) => (
              <div className="amen-cell" key={a.title}>
                <AmenityIcon name={a.icon} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-gold btn-sm" to="/booking">Reserve Now</Link>
            <Link className="btn btn-outline btn-sm" to="/rates">View Rates</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Good to know</p>
          <h2 className="section-title">Practical information</h2>
          <table className="spec-table">
            <tbody>
              <tr><th scope="row">Hours</th><td>Pools &amp; beach 7am–8pm · Spa 9am–8pm · Restaurants 7am–10pm</td></tr>
              <tr><th scope="row">Families</th><td>Cove Club for ages 4–12, babysitting on request, interconnecting villas</td></tr>
              <tr><th scope="row">Connectivity</th><td>Fibre Wi-Fi throughout; a digital-detox basket in every stay</td></tr>
              <tr><th scope="row">Accessibility</th><td>Step-free paths to restaurants, pool hoist and beach chairs on request</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

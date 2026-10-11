import { Link } from 'react-router-dom';
import { CONTACT } from '../data/resort';
import SiteLogo from './SiteLogo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand"><SiteLogo size={36} /> Aurelia Cove</p>
            <p className="footer-note">
              A private retreat on the shores of Solmere Bay — for slow days,
              warm water and unhurried evenings.
            </p>
          </div>
          <nav aria-label="Explore">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/stay">Stay</Link></li>
              <li><Link to="/experiences">Experiences</Link></li>
              <li><Link to="/amenities">Amenities</Link></li>
              <li><Link to="/booking">Book your stay</Link></li>
            </ul>
          </nav>
          <div>
            <h4>Reservations</h4>
            <ul>
              <li>{CONTACT.phone}</li>
              <li><a href={`mailto:${CONTACT.reservations}`}>{CONTACT.reservations}</a></li>
              <li>{CONTACT.hours}</li>
              <li>Check-in 3:00 pm · Check-out 11:00 am</li>
            </ul>
          </div>
          <div>
            <h4>Find us</h4>
            <ul>
              {CONTACT.addressLines.map((l) => (<li key={l}>{l}</li>))}
              <li><Link to="/contact">Contact &amp; island guide</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Aurelia Cove Resort &amp; Retreat. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

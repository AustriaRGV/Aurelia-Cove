import { Link, useLocation } from 'react-router-dom';
import AvailabilityLink from './AvailabilityLink';

/** Fixed bottom action bar on phones: View Rates · Check Availability · Reserve Now. */
export default function MobileActionBar() {
  const { pathname } = useLocation();
  const onRates = pathname === '/rates';
  const onBooking = pathname === '/booking';

  return (
    <nav className="mobile-bar" aria-label="Quick actions">
      <Link className="mobile-bar-btn" to="/rates" aria-current={onRates ? 'page' : undefined}>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 5h16M4 12h16M4 19h10" />
        </svg>
        View Rates
      </Link>
      <AvailabilityLink className="mobile-bar-btn">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3" y="5" width="18" height="16" rx="1" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
        Check Availability
      </AvailabilityLink>
      <Link className="mobile-bar-btn primary" to="/booking" aria-current={onBooking ? 'page' : undefined}>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7" />
          <path d="M2 7h20v5H2zM12 20V7M12 7S10.5 3 8 3a2.5 2.5 0 0 0 0 5zM12 7s1.5-4 4-4a2.5 2.5 0 0 1 0 5z" />
        </svg>
        Reserve Now
      </Link>
    </nav>
  );
}

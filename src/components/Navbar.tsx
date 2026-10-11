import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SiteLogo from './SiteLogo';

export default function Navbar() {
  const location = useLocation();
  const solid = location.pathname !== '/';

  useEffect(() => {
    const nav = document.getElementById('site-nav');
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    const nav = document.getElementById('site-nav');
    nav?.classList.remove('scrolled');
    document.querySelector('.nav-links')?.classList.remove('open');
  }, [location.pathname]);

  const toggle = () => document.querySelector('.nav-links')?.classList.toggle('open');

  return (
    <header className={`nav${solid ? ' solid' : ''}`} id="site-nav">
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label="Aurelia Cove Resort home">
          <span className="brand-mark" aria-hidden="true"><SiteLogo size={40} /></span>
          <span>
            <span className="brand-name">Aurelia Cove</span>
            <br />
            <span className="brand-sub">Resort &amp; Retreat</span>
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-links" id="nav-links">
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/stay" className={({ isActive }) => (isActive ? 'active' : '')}>Stay</NavLink></li>
            <li><NavLink to="/experiences" className={({ isActive }) => (isActive ? 'active' : '')}>Experiences</NavLink></li>
            <li><NavLink to="/amenities" className={({ isActive }) => (isActive ? 'active' : '')}>Amenities</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
          </ul>
        </nav>
        <div className="nav-cta">
          <Link className="btn btn-outline btn-sm" to="/stay">Explore villas</Link>
          <Link className="btn btn-gold btn-sm" to="/booking">Book your stay</Link>
          <button className="menu-toggle" onClick={toggle} aria-label="Toggle menu" aria-controls="nav-links">Menu</button>
        </div>
      </div>
    </header>
  );
}

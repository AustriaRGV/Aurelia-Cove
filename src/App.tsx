import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingMessenger from './components/FloatingMessenger';
import MobileActionBar from './components/MobileActionBar';
import Home from './pages/Home';
import Stay from './pages/Stay';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import Rates from './pages/Rates';
import Experiences from './pages/Experiences';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';

const NAV_OFFSET = 96; // clears the fixed header

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const top = window.scrollY + el.getBoundingClientRect().top - NAV_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollManager />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/stay/:slug" element={<RoomDetails />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Stay />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <FloatingMessenger />
      <MobileActionBar />
    </BrowserRouter>
  );
}

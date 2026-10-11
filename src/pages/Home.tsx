import { Link } from 'react-router-dom';
import { ACCOMMODATIONS, AMENITIES, CONTACT, EXPERIENCES, GALLERY, TESTIMONIALS, formatUSD } from '../data/resort';
import BookingSearchPanel from '../components/BookingSearchPanel';
import RoomCard from '../components/RoomCard';
import Newsletter from '../components/Newsletter';
import AmenityIcon from '../components/AmenityIcon';
import Reveal from '../components/Reveal';

function MapIllustration() {
  return (
    <svg viewBox="0 0 420 340" role="img" aria-label="Illustrated map of Solmere Bay">
      <rect width="420" height="340" fill="#e3eceb" />
      <path d="M40 250 C90 200 70 150 130 130 C180 115 200 150 250 140 C310 128 340 90 385 105 C400 200 330 290 220 300 C140 307 80 290 40 250Z" fill="#f4efe0" stroke="#1e3a2f" strokeWidth="1.5" />
      <path d="M120 220 C160 200 200 210 230 190" fill="none" stroke="#2e5e63" strokeWidth="1.4" strokeDasharray="5 4" />
      <circle cx="205" cy="198" r="5" fill="#1e3a2f" />
      <text x="218" y="202" fontSize="12" fill="#1e3a2f" fontFamily="sans-serif">Aurelia Cove</text>
      <text x="60" y="270" fontSize="11" fill="#2e5e63" fontFamily="sans-serif" letterSpacing="3">S O L M E R E&nbsp;&nbsp;B A Y</text>
      <path d="M300 230 q6 -8 12 0 q6 8 12 0" fill="none" stroke="#2e5e63" strokeWidth="1.3" />
      <path d="M90 120 q6 -8 12 0 q6 8 12 0" fill="none" stroke="#2e5e63" strokeWidth="1.3" />
      <g fill="#1e3a2f" opacity="0.7">
        <circle cx="150" cy="170" r="2.5" /><circle cx="165" cy="185" r="2.5" /><circle cx="140" cy="195" r="2.5" />
      </g>
      <text x="105" y="162" fontSize="10" fill="#1e3a2f" fontFamily="sans-serif">Palm Grove</text>
      <text x="255" y="165" fontSize="10" fill="#1e3a2f" fontFamily="sans-serif">Turtle Reef</text>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Welcome to Aurelia Cove">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2200&auto=format&fit=crop"
            alt="Infinity pool at Aurelia Cove blending into the turquoise bay at golden hour"
          />
          <div className="hero-shade" aria-hidden="true" />
        </div>
        <div className="hero-content">
          <p className="eyebrow" style={{ color: '#e9dfc9' }}>Solmere Bay · A private island retreat</p>
          <h1 className="hero-title">Where the bay <em>slows time</em> for you</h1>
          <p className="hero-copy">
            Twenty-eight villas and suites hidden between gardens and water — private pools,
            unhurried spa rituals and dinners at the edge of the tide.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/stay">Explore our villas</Link>
            <Link className="btn btn-outline" to="/booking">Book your stay</Link>
          </div>
          <div className="hero-meta">
            <div><strong>28</strong><span>Villas &amp; suites</span></div>
            <div><strong>400 m</strong><span>Private beach</span></div>
            <div><strong>From {formatUSD(Math.min(...ACCOMMODATIONS.map((a) => a.rate)))}</strong><span>Per night</span></div>
          </div>
        </div>
      </section>

      <BookingSearchPanel />

      <section className="section" aria-labelledby="stay-h">
        <div className="container">
          <Reveal>
            <div className="section-head-split">
              <div>
                <p className="eyebrow">Stay</p>
                <h2 className="section-title" id="stay-h">Four ways to live by the water</h2>
              </div>
              <Link className="btn btn-outline-dark btn-sm" to="/stay">View all accommodation</Link>
            </div>
            <p className="section-lede">From sunrise balconies to a clifftop residence — every stay includes breakfast, gardens, beach and the slow rhythm of the bay.</p>
          </Reveal>
          <div className="stay-grid">
            {ACCOMMODATIONS.map((r) => (<RoomCard key={r.slug} room={r} />))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="exp-h">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Experiences</p>
            <h2 className="section-title" id="exp-h">Days shaped around the tide</h2>
            <p className="section-lede">Four signature rituals, arranged by our island hosts. Reserve ahead or decide over breakfast — the bay is patient.</p>
          </Reveal>
          <div className="exp-layout">
            {EXPERIENCES.map((e) => (
              <article className="exp-item" key={e.title}>
                <img src={e.image} alt={e.alt} loading="lazy" />
                <div className="exp-copy">
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                  <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{e.meta}</span>
                  <Link className="exp-link" to="/experiences">Discover more</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="amen-h">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Amenities</p>
            <h2 className="section-title" id="amen-h" style={{ color: 'var(--ivory)' }}>Everything within a barefoot walk</h2>
          </Reveal>
          <div className="amen-grid">
            {AMENITIES.slice(0, 4).map((a) => (
              <div className="amen-cell" key={a.title}>
                <AmenityIcon name={a.icon} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link className="btn btn-gold btn-sm" to="/amenities">Explore all amenities</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="gal-h">
        <div className="container">
          <Reveal>
            <div className="section-head-split">
              <div>
                <p className="eyebrow">Gallery</p>
                <h2 className="section-title" id="gal-h">Postcards from the cove</h2>
              </div>
            </div>
          </Reveal>
          <div className="gallery-grid">
            {GALLERY.map((g) => (
              <figure key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="story-h">
        <div className="container story">
          <Reveal className="story-media">
            <img className="main" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop" alt="Palm gardens and villa rooftops of Aurelia Cove at golden hour" loading="lazy" />
            <img className="inset" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop" alt="Spa detail with orchid and folded towels" loading="lazy" />
          </Reveal>
          <Reveal className="story-copy">
            <p className="eyebrow">Our story</p>
            <h2 id="story-h">A cove kept quiet on purpose</h2>
            <p>
              Aurelia Cove began as a family coconut grove on the shores of Solmere Bay.
              We built low, planted densely and left the beach to the turtles — so the loudest sound
              at noon is still the water.
            </p>
            <p>
              Today, gardeners, chefs, sailors and therapists from nearby villages tend
              twenty-eight stays. Nothing here chases spectacle; everything leans toward rest.
            </p>
            <div className="story-stats">
              <div><strong>1998</strong><span>Grove founded</span></div>
              <div><strong>28</strong><span>Stays</span></div>
              <div><strong>12</strong><span>Acres of garden</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section testi" aria-labelledby="testi-h">
        <div className="container">
          <Reveal>
            <p className="eyebrow center" style={{ justifyContent: 'center' }}>Guest stories</p>
            <h2 className="section-title" id="testi-h" style={{ textAlign: 'center', marginInline: 'auto' }}>What slow days feel like</h2>
            <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '0.8rem', fontSize: '0.9rem' }}>Stories from recent stays at the cove.</p>
          </Reveal>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <article className="testi-card" key={t.name}>
                <span className="testi-stars" aria-label="Rated 5 out of 5">★★★★★</span>
                <p className="testi-quote">“{t.quote}”</p>
                <p className="testi-who"><strong>{t.name}</strong>{t.detail}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.2rem' }}>
            <Link className="btn btn-primary" to="/booking">Begin your booking request</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="loc-h">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Location</p>
            <h2 className="section-title" id="loc-h">Solmere Bay, a quiet island escape</h2>
          </Reveal>
          <div className="location">
            <div className="map-frame"><MapIllustration /></div>
            <div className="location-copy">
              <p style={{ color: 'var(--muted)' }}>
                Solmere Bay is a crescent of pale sand, a reef twenty minutes out,
                and villages that have welcomed travelers for generations.
              </p>
              <ul>
                <li><strong>Arrival:&nbsp;</strong> Solmere Marina, then a 10-minute boat transfer.</li>
                <li><strong>Reef:&nbsp;</strong> Turtle Reef, a sheltered marine garden with calm morning water.</li>
                <li><strong>Climate:&nbsp;</strong> Warm and breezy year-round; brief afternoon showers in “green season”.</li>
              </ul>
              <div><Link className="btn btn-outline-dark btn-sm" to="/contact">Plan your arrival</Link></div>
            </div>
          </div>
          <div style={{ marginTop: '2.5rem' }}><Newsletter /></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="newsletter" style={{ background: 'var(--forest)', borderColor: 'var(--forest)', color: 'var(--ivory)' }}>
            <div>
              <p className="eyebrow" style={{ color: 'var(--champagne)' }}>Reservations</p>
              <h2 style={{ color: 'var(--ivory)' }}>The water is warm. Your villa is waiting.</h2>
              <p style={{ color: 'rgba(250,247,240,0.75)' }}>Contact: {CONTACT.phone} · {CONTACT.reservations}</p>
            </div>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <Link className="btn btn-gold" to="/booking">Book your stay</Link>
              <Link className="btn btn-outline" to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

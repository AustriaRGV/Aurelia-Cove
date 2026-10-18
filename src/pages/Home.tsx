import { Link } from 'react-router-dom';
import { ACCOMMODATIONS, AMENITIES, CONTACT, COTTAGES, DIRECTIONS, EXPERIENCES, GALLERY, PACKAGES, TESTIMONIALS, formatPHP } from '../data/resort';
import BookingSearchPanel from '../components/BookingSearchPanel';
import RoomCard from '../components/RoomCard';
import Newsletter from '../components/Newsletter';
import AmenityIcon from '../components/AmenityIcon';
import MessengerButton from '../components/MessengerButton';
import Reveal from '../components/Reveal';
import MapIllustration from '../components/MapIllustration';

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Welcome to Aurelia Cove">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2200&auto=format&fit=crop"
            alt="Tropical resort pool lined with palms and sun loungers at Aurelia Cove"
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
          <div className="hero-actions" style={{ marginBottom: '1.5rem' }}>
            <Link className="btn btn-gold" to="/rates">View Rates</Link>
            <Link className="btn btn-primary" to="/booking">Reserve Now</Link>
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

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="cottage-h">
        <div className="container">
          <Reveal>
            <div className="section-head-split">
              <div>
                <p className="eyebrow">Cottages &amp; day use</p>
                <h2 className="section-title" id="cottage-h">A day by the water, no room required</h2>
              </div>
              <Link className="btn btn-outline-dark btn-sm" to="/rates">View Rates</Link>
            </div>
            <p className="section-lede">
              Nipa-shaded cottages on the sand, beside the horizon pool and tucked into the gardens —
              open to day guests as well as overnight stays. Every cottage includes pool and beach access.
            </p>
          </Reveal>
          <div className="cottage-grid">
            {COTTAGES.map((c) => (
              <article className="cottage-card" key={c.slug}>
                <div className="cottage-media">
                  <img src={c.image.src} alt={c.image.alt} loading="lazy" />
                  {c.badge && <span className="rate-badge on-media">{c.badge}</span>}
                </div>
                <div className="cottage-body">
                  <h3>{c.name}</h3>
                  <p className="cottage-tag">{c.tagline}</p>
                  <p className="cottage-desc">{c.description}</p>
                  <dl className="cottage-rates">
                    <div><dt>Day use</dt><dd>{formatPHP(c.dayRate)}<small> / day</small></dd></div>
                    <div><dt>Overnight</dt><dd>{formatPHP(c.overnightRate)}<small> / night</small></dd></div>
                  </dl>
                  <p className="cottage-hours">Seats up to {c.capacity} · {c.hours}</p>
                  <div className="room-actions">
                    <Link className="btn btn-outline-dark btn-sm" to="/rates">View Rates</Link>
                    <Link className="btn btn-primary btn-sm" to={`/booking?trip=day&pick=cottage:${c.slug}:day`}>Reserve Now</Link>
                  </div>
                </div>
              </article>
            ))}
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

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="pkg-h">
        <div className="container">
          <Reveal>
            <div className="section-head-split">
              <div>
                <p className="eyebrow">Packages</p>
                <h2 className="section-title" id="pkg-h">Bundled stays, one simple price</h2>
              </div>
              <Link className="btn btn-outline-dark btn-sm" to="/rates">All packages</Link>
            </div>
            <p className="section-lede">
              Accommodation, dining, spa and tours arranged together — for less than booking each part
              on its own, and with one host looking after everything.
            </p>
          </Reveal>
          <div className="package-grid">
            {PACKAGES.map((p) => (
              <article className="package-card" key={p.slug}>
                <div className="package-media">
                  <img src={p.image.src} alt={p.image.alt} loading="lazy" />
                  {p.badge && <span className="rate-badge on-media">{p.badge}</span>}
                </div>
                <div className="package-body">
                  <h3>{p.name}</h3>
                  <p className="package-tag">{p.tagline}</p>
                  <p>{p.description}</p>
                  <ul className="amen-list">
                    {p.includes.slice(0, 3).map((i) => (<li key={i}>{i}</li>))}
                  </ul>
                  <div className="package-foot">
                    <p className="package-price"><strong>{formatPHP(p.price)}</strong><span>{p.priceNote}</span></p>
                    <Link
                      className="btn btn-primary btn-sm"
                      to={`/booking?trip=${p.applies === 'day' ? 'day' : 'overnight'}&pick=package:${p.slug}`}
                    >
                      Reserve Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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
            <Link className="btn btn-primary" to="/booking">Reserve Now</Link>
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
              <div className="location-actions">
                <a className="btn btn-outline-dark btn-sm" href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
                <Link className="btn btn-quiet btn-sm" to="/contact">Plan your arrival</Link>
              </div>
            </div>
          </div>

          <div className="directions" aria-labelledby="dir-h">
            <h3 id="dir-h">Getting here</h3>
            <div className="directions-grid">
              {DIRECTIONS.map((d) => (
                <div className="directions-item" key={d.title}>
                  <AmenityIcon name={d.icon} />
                  <div>
                    <h4>{d.title}<span className="directions-meta">{d.meta}</span></h4>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))}
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
              <Link className="btn btn-gold" to="/rates">View Rates</Link>
              <Link className="btn btn-primary" to="/booking">Reserve Now</Link>
              <MessengerButton variant="outline" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

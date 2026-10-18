import { Link } from 'react-router-dom';
import { ACCOMMODATIONS, COTTAGES, DAY_TOURS, PACKAGES, formatPHP } from '../data/resort';
import Reveal from '../components/Reveal';

function SectionHead({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-lede">{lede}</p>
    </Reveal>
  );
}

export default function Rates() {
  const from = Math.min(...ACCOMMODATIONS.map((a) => a.rate));

  return (
    <>
      <section className="page-hero">
        <img className="bg" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow" style={{ color: '#e9dfc9' }}>Rates &amp; Packages</p>
          <h1>Everything, plainly priced</h1>
          <p>
            Rooms and villas, cottages for the day, guided day tours and bundled packages —
            all in Philippine pesos. Every rate below is an estimate; we confirm availability and
            final pricing by hand.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '3rem' }} aria-labelledby="rooms-h">
        <div className="container">
          <SectionHead
            eyebrow="Overnight"
            title="Rooms & villas"
            lede={`Per night, breakfast included. From ${formatPHP(from)} for the Oceanview Suite. Service charge of 12% and a one-time cleaning fee are added at confirmation.`}
          />
          <h2 id="rooms-h" className="visually-hidden">Rooms and villa rates</h2>
          <div className="rates-table-wrap">
            <table className="rates-table">
              <caption className="visually-hidden">Nightly rates for rooms and villas</caption>
              <thead>
                <tr>
                  <th scope="col">Stay</th>
                  <th scope="col">Sleeps</th>
                  <th scope="col">Beds</th>
                  <th scope="col">Rate / night</th>
                  <th scope="col"><span className="visually-hidden">Reserve</span></th>
                </tr>
              </thead>
              <tbody>
                {ACCOMMODATIONS.map((a) => (
                  <tr key={a.slug}>
                    <th scope="row" className="rates-name">
                      {a.name}
                      {a.badge && <span className="rate-badge">{a.badge}</span>}
                      <small>{a.view}</small>
                    </th>
                    <td data-label="Sleeps">{a.guests} guests</td>
                    <td data-label="Beds">{a.beds}</td>
                    <td data-label="Rate / night" className="rates-price">{formatPHP(a.rate)}</td>
                    <td className="rates-cta">
                      <Link className="btn btn-outline-dark btn-sm" to={`/booking?room=${a.slug}`}>Reserve</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cottages-h">
        <div className="container">
          <SectionHead
            eyebrow="Day use & overnight"
            title="Cottages"
            lede="Nipa-shaded cottages on the sand, by the pool and in the gardens. Day use runs 8:00 – 17:00; overnight cottages keep the same space until 11:00 the next morning."
          />
          <h2 id="cottages-h" className="visually-hidden">Cottage rates</h2>
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
                  <ul className="amen-list">
                    {c.inclusions.map((i) => (<li key={i}>{i}</li>))}
                  </ul>
                  <dl className="cottage-rates">
                    <div><dt>Day use</dt><dd>{formatPHP(c.dayRate)}<small> / day · up to {c.capacity}</small></dd></div>
                    <div><dt>Overnight</dt><dd>{formatPHP(c.overnightRate)}<small> / night</small></dd></div>
                  </dl>
                  <p className="cottage-hours">{c.hours}</p>
                  <Link className="btn btn-primary btn-sm cottage-cta" to={`/booking?trip=day&pick=cottage:${c.slug}:day`}>
                    Reserve this cottage
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="tours-h">
        <div className="container">
          <SectionHead
            eyebrow="Day tours"
            title="Come for the day"
            lede="Guided trips that leave from our own landing. Rates are per person and include gear, guides and boat transfers."
          />
          <h2 id="tours-h" className="visually-hidden">Day tour rates</h2>
          <div className="tour-list">
            {DAY_TOURS.map((t) => (
              <article className="tour-row" key={t.slug}>
                <img src={t.image.src} alt={t.image.alt} loading="lazy" />
                <div className="tour-body">
                  <h3>{t.name}{t.badge && <span className="rate-badge">{t.badge}</span>}</h3>
                  <p className="tour-meta">{t.duration}</p>
                  <p>{t.description}</p>
                  <ul className="amen-list">
                    {t.includes.map((i) => (<li key={i}>{i}</li>))}
                  </ul>
                </div>
                <div className="tour-price">
                  <strong>{formatPHP(t.rate)}</strong>
                  <span>per person</span>
                  <Link className="btn btn-outline-dark btn-sm" to={`/booking?trip=day&pick=day-tour:${t.slug}`}>
                    Book this tour
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="packages-h">
        <div className="container">
          <SectionHead
            eyebrow="Packages"
            title="Bundle it, save the thinking"
            lede="Curated stays that pair accommodation with dining, spa and tours. One price, one reference, one host looking after you."
          />
          <h2 id="packages-h" className="visually-hidden">Package rates</h2>
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
                    {p.includes.map((i) => (<li key={i}>{i}</li>))}
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel-card" style={{ marginTop: 0 }}>
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>Rates &amp; booking terms</h2>
            <table className="spec-table">
              <tbody>
                <tr><th scope="row">Currency</th><td>All rates are in Philippine pesos (₱) and are estimates until confirmed.</td></tr>
                <tr><th scope="row">Inclusions</th><td>Overnight stays include breakfast for registered guests. Cottages and day tours include the inclusions listed above.</td></tr>
                <tr><th scope="row">Service charge</th><td>A 12% service charge is added to every booking. Room bookings also carry a one-time ₱45 cleaning fee.</td></tr>
                <tr><th scope="row">Children</th><td>Children under 6 stay free in an existing room. Cot and extra-person rates quoted on request.</td></tr>
                <tr><th scope="row">Availability</th><td>Nothing is charged when you enquire. Our hosts reply within one business day to confirm the rate and hold your dates.</td></tr>
                <tr><th scope="row">Payments</th><td>A 50% deposit confirms a reservation; the balance is settled on arrival.</td></tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link className="btn btn-primary" to="/booking">Reserve Now</Link>
              <Link className="btn btn-outline-dark" to="/contact">Ask a question</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

# Aurelia Cove Resort & Retreat

A marketing + booking-request site for Aurelia Cove, a private resort on Solmere Bay.
Browse villas and suites, explore experiences and amenities, and submit a booking
request through a five-step wizard (frontend-only, no real reservations).

## Stack

- React 18 + TypeScript + Vite
- react-router-dom (Home, Stay, RoomDetails, Booking, Experiences, Amenities, Contact)
- Lenis smooth scrolling

## Scripts

- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run build` — typecheck (`tsc --noEmit`) + production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — typecheck only

## Structure

- `index.html` — entry, favicon (`public/favicon.svg`)
- `public/favicon.svg` — site logo / favicon (sun-over-waves mark, shared with `SiteLogo`)
- `src/App.tsx` — router, smooth scroll, layout (`Navbar`, `Footer`, `BackToTop`)
- `src/components/` — `SiteLogo`, `Navbar`, `Footer`, `BackToTop`, `RoomCard`,
  `BookingSearchPanel`, `Newsletter`, `AmenityIcon`, `Reveal`
- `src/pages/` — `Home`, `Stay`, `RoomDetails`, `Booking`, `Experiences`,
  `Amenities`, `Contact`
- `src/data/resort.ts` — accommodation, experience, gallery, and contact content
- `src/lib/booking.ts` — date helpers, price breakdown, validation
- `src/styles.css` — design tokens and all global styles

## Notes

- Prices render in USD via `formatUSD`.
- The booking flow is a demonstration: it validates input and issues a reference
  number without processing payment or storing data.

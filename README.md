# Aurelia Cove Resort & Retreat

A marketing + reservation-inquiry site for Aurelia Cove, a private resort on Solmere Bay.
Browse rooms, cottages and day tours, compare rates and packages, and submit a reservation
request through a five-step wizard (frontend-only, no real reservations or payments).

## Stack

- React 18 + TypeScript + Vite
- react-router-dom (Home, Stay, RoomDetails, Rates, Booking, Experiences, Amenities, Contact)
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
- `src/App.tsx` — router, hash-aware smooth scroll, layout (`Navbar`, `Footer`, `BackToTop`,
  `FloatingMessenger`, `MobileActionBar`)
- `src/components/` — `SiteLogo`, `Navbar`, `Footer`, `BackToTop`, `RoomCard`,
  `BookingSearchPanel`, `Newsletter`, `AmenityIcon`, `Reveal`, `Rates` helpers,
  `MessengerButton`, `FloatingMessenger`, `MobileActionBar`, `AvailabilityLink`
- `src/pages/` — `Home`, `Stay`, `RoomDetails`, `Rates`, `Booking`, `Experiences`,
  `Amenities`, `Contact`
- `src/data/resort.ts` — accommodation, cottage, day-tour, package, experience, gallery,
  amenity, contact and directions content, plus the `Bookable` lookup helpers
- `src/lib/booking.ts` — date helpers, unified `quoteFor` estimate, validation
- `src/styles.css` — design tokens and all global styles

## Rates & booking

- All prices display in Philippine pesos (₱) via `formatPHP`.
- The reservation form supports two trip types: **Overnight stay** (check-in + check-out)
  and **Day tour** (a single day-tour date). Guests pick a room, cottage, day tour or package.
- Estimates add a 12% service charge, plus a one-time cleaning fee for rooms.
- The flow is a demonstration: it validates input and issues a reference number without
  processing payment or storing data. Availability is confirmed manually by the resort.

## Mobile

- A sticky bottom action bar (`MobileActionBar`) appears under 620px with **View Rates**,
  **Check Availability** and **Reserve Now**.
- A floating Facebook Messenger button (`FloatingMessenger`) is available on every page.
- Rate tables stack into labelled rows on small screens.

## Swapping in real details

- Facebook / Messenger: update `CONTACT.facebook` and `CONTACT.messenger` in
  `src/data/resort.ts` (currently placeholders pointing at `m.me/aureliacove`).
- Phone, email, address and map link live in the same `CONTACT` object.
- Photography uses Unsplash URLs in `src/data/resort.ts`; replace with your own images.

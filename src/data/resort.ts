export interface Accommodation {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  rate: number;
  guests: number;
  bedrooms: number;
  beds: string;
  size: string;
  view: string;
  amenities: string[];
  images: { src: string; alt: string }[];
  features: { title: string; text: string }[];
  badge?: string;
}

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const ACCOMMODATIONS: Accommodation[] = [
  {
    slug: 'oceanview-suite',
    name: 'Oceanview Suite',
    tagline: 'Wake to the sound of the bay',
    description:
      'A serene upper-floor suite with a shaded balcony facing the lagoon — made for slow mornings and unhurried evenings.',
    longDescription: [
      'Perched above the coconut grove, the Oceanview Suite frames Solmere Bay like a living painting. Wide timber shutters open to sea air, while inside, lime-washed walls, woven rattan and cool stone keep the light soft through the day.',
      'A king bedroom flows into a sitting corner and a deep-soaking tub. Breakfast arrives on the balcony as the fishing boats drift home — the quietest start we know.',
    ],
    rate: 9500,
    guests: 2,
    bedrooms: 1,
    beds: '1 king bed',
    size: '58 m² + 12 m² balcony',
    view: 'Lagoon & sunrise horizon',
    amenities: ['Sea-facing balcony', 'Deep-soaking tub', 'Daily breakfast', 'Nespresso & teas', 'Rain shower', 'High-speed Wi-Fi', 'In-room safe', 'Evening turndown'],
    images: [
      { src: img('photo-1582719508461-905c673771fd'), alt: 'Oceanview Suite bedroom with neutral linens and garden light' },
      { src: img('photo-1590490360182-c33d57733427'), alt: 'Suite sitting area with rattan chairs' },
      { src: img('photo-1611892440504-42a792e24d32'), alt: 'Suite bathroom with stone soaking tub' },
    ],
    features: [
      { title: 'Sunrise balcony', text: 'East-facing terrace with loungers and a bay panorama.' },
      { title: 'Calm interiors', text: 'Lime-wash, teak and hand-loomed textiles throughout.' },
    ],
    badge: 'Most loved by couples',
  },
  {
    slug: 'tropical-garden-villa',
    name: 'Tropical Garden Villa',
    tagline: 'A private house inside the gardens',
    description:
      'A freestanding one-bedroom villa wrapped in frangipani and palms, with an outdoor shower garden and plunge terrace.',
    longDescription: [
      'Tucked along the garden paths, each Tropical Garden Villa is its own small house — a thatched veranda, an open-air shower courtyard, and interiors that blur into the planting beyond.',
      'Families and friends love the extra lawn space and the outdoor dining sala. Geckos chirp at dusk; the gardeners leave hibiscus on your pillow.',
    ],
    rate: 14500,
    guests: 3,
    bedrooms: 1,
    beds: '1 king bed + daybed',
    size: '84 m² + private garden',
    view: 'Frangipani & palm gardens',
    amenities: ['Private garden terrace', 'Outdoor shower', 'Daybed / third guest', 'Daily breakfast', 'Outdoor dining sala', 'Coffee & minibar', 'High-speed Wi-Fi', 'Laundry on request'],
    images: [
      { src: img('photo-1602002418082-a4443e081dd1'), alt: 'Tropical Garden Villa veranda surrounded by palms' },
      { src: img('photo-1520250497591-112f2f40a3f4'), alt: 'Villa pool terrace with loungers at dusk' },
      { src: img('photo-1566073771259-6a8506099945'), alt: 'Resort gardens and pathways at golden hour' },
    ],
    features: [
      { title: 'Outdoor living', text: 'Veranda, dining sala and shower garden open to the sky.' },
      { title: 'Garden privacy', text: 'Dense native planting screens every villa from its neighbours.' },
    ],
    badge: 'Ideal for families',
  },
  {
    slug: 'private-pool-villa',
    name: 'Private Pool Villa',
    tagline: 'Your own water, your own hours',
    description:
      'A secluded villa with a 12-metre private pool, sun pavilion and open-plan living — the resort’s signature stay.',
    longDescription: [
      'Behind high bamboo walls, the Private Pool Villa is a world of its own: a still turquoise pool, a shaded pavilion for long lunches, and suites that open fully to the water.',
      'A dedicated villa host arranges floating breakfasts, in-villa spa rituals and sunset sails. Days here tend to lose their edges — happily.',
    ],
    rate: 22500,
    guests: 4,
    bedrooms: 2,
    beds: '1 king + 2 twin beds',
    size: '160 m² + 12 m private pool',
    view: 'Pool courtyard & garden palms',
    amenities: ['12 m private pool', 'Sun pavilion', 'Dedicated villa host', 'Floating breakfast option', 'In-villa spa on request', 'Full kitchenette', 'Sonos & Wi-Fi', 'Daily fruit & press'],
    images: [
      { src: img('photo-1571896349842-33c89424de2d'), alt: 'Private Pool Villa with turquoise pool and palms' },
      { src: img('photo-1540541338287-41700207dee6'), alt: 'Resort infinity pool meeting the horizon' },
      { src: img('photo-1571003123894-1f0594d2b5d9'), alt: 'Villa bedroom opening onto the pool terrace' },
    ],
    features: [
      { title: 'True seclusion', text: 'Walled courtyard, private entry and no shared walls.' },
      { title: 'Villa host', text: 'One point of contact for dining, spa and island plans.' },
    ],
    badge: 'Signature stay',
  },
  {
    slug: 'grand-horizon-residence',
    name: 'Grand Horizon Residence',
    tagline: 'Three suites above the water',
    description:
      'A clifftop residence with three suites, infinity edge pool, chef’s kitchen and panoramic decks for gatherings.',
    longDescription: [
      'The Grand Horizon Residence crowns the northern point — three generous suites, a 20-metre infinity edge that pours toward the bay, and decks made for golden-hour dinners.',
      'A private chef’s kitchen, cinema corner and library make it ideal for reunions and honeymoons that invite everyone. Staff quarters keep service invisible until the moment you need it.',
    ],
    rate: 32000,
    guests: 6,
    bedrooms: 3,
    beds: '2 king beds + 2 queen beds',
    size: '320 m² + 20 m infinity pool',
    view: 'Panoramic bay & sunset point',
    amenities: ['20 m infinity pool', 'Private chef on request', 'Sunset deck & firepit', 'Cinema & library', '3 en-suite bedrooms', 'Airport transfer included', 'Daily breakfast & press', 'Laundry included'],
    images: [
      { src: img('photo-1540541338287-41700207dee6'), alt: 'Grand Horizon Residence infinity pool above the bay' },
      { src: img('photo-1520250497591-112f2f40a3f4'), alt: 'Residence terrace with palms and sun loungers' },
      { src: img('photo-1507525428034-b723cf961d3e'), alt: 'White sand beach of Solmere Bay at midday' },
    ],
    features: [
      { title: 'Made for gatherings', text: 'Three suites, generous living decks and a firepit terrace.' },
      { title: 'Clifftop panorama', text: 'Uninterrupted sunset views from pool, dining and library.' },
    ],
    badge: 'Clifftop & private',
  },
];

/* ---------- cottages (day use + overnight) ---------- */

export interface Cottage {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  dayRate: number;
  overnightRate: number;
  hours: string;
  capacity: number;
  inclusions: string[];
  image: { src: string; alt: string };
  badge?: string;
}

export const COTTAGES: Cottage[] = [
  {
    slug: 'beachfront-cottage',
    name: 'Beachfront Cottage',
    tagline: 'Sand between your toes, all day',
    description:
      'A nipa-shaded cottage on the shoreline, steps from the calm swimming area — the classic way to spend a day at the cove.',
    dayRate: 3500,
    overnightRate: 7500,
    hours: '8:00 – 17:00 (overnight until 11:00 next day)',
    capacity: 10,
    inclusions: ['Beach & pool access', '4 sun loungers', 'Cooler & ice', 'Freshwater shower', 'Grill on request'],
    image: { src: img('photo-1507525428034-b723cf961d3e', 900), alt: 'Beachfront cottage shaded on pale sand beside calm water' },
    badge: 'Most booked',
  },
  {
    slug: 'garden-kubo',
    name: 'Garden Kubo',
    tagline: 'Quiet shade under the palms',
    description:
      'A traditional bamboo kubo set back in the gardens, with a low table, banig mats and breezes on every side.',
    dayRate: 2000,
    overnightRate: 4500,
    hours: '8:00 – 17:00 (overnight until 11:00 next day)',
    capacity: 6,
    inclusions: ['Garden access', '2 day beds', 'Banig mats & pillows', 'Shared washroom', 'Free drinking water'],
    image: { src: img('photo-1566073771259-6a8506099945', 900), alt: 'Bamboo garden cottage beneath coconut palms' },
  },
  {
    slug: 'poolside-cabana',
    name: 'Poolside Cabana',
    tagline: 'A front row seat to the water',
    description:
      'An open-sided cabana beside the horizon pool, with curtained day beds and table service from the grill.',
    dayRate: 4500,
    overnightRate: 9500,
    hours: '8:00 – 17:00 (overnight until 11:00 next day)',
    capacity: 8,
    inclusions: ['Pool deck location', 'Curtained day bed', 'Table service', 'Towels included', 'Fruit platter'],
    image: { src: img('photo-1540541338287-41700207dee6', 900), alt: 'Poolside cabana with day beds beside an infinity pool' },
    badge: 'Best for celebrations',
  },
];

/* ---------- day tours ---------- */

export interface DayTour {
  slug: string;
  name: string;
  description: string;
  rate: number;
  duration: string;
  includes: string[];
  image: { src: string; alt: string };
  badge?: string;
}

export const DAY_TOURS: DayTour[] = [
  {
    slug: 'cove-day-pass',
    name: 'Cove Day Pass',
    description:
      'Full run of the grounds — horizon pool, beach, gardens and kiddie shallows — with lunch at the barefoot grill.',
    rate: 1500,
    duration: '8:00 – 17:00',
    includes: ['Pool & beach access', 'Welcome drink', 'Lunch at the grill', 'Towel & shower use', 'Kids’ cove club'],
    image: { src: img('photo-1551882547-ff40c63fe5fa', 900), alt: 'Resort pool lined with palms open to day guests' },
    badge: 'Walk-in friendly',
  },
  {
    slug: 'reef-snorkel-tour',
    name: 'Reef & Snorkel Tour',
    description:
      'A guided morning over Turtle Reef with our marine team — turtles, rays and coral gardens, gear and boat included.',
    rate: 2800,
    duration: 'Half day · 3.5 hours',
    includes: ['Boat transfers', 'Mask, snorkel & vest', 'Marine guide', 'Iced water & fruit', 'Day pass add-on'],
    image: { src: img('photo-1544551763-46a013bb70d5', 900), alt: 'Snorkeler floating above a shallow coral reef' },
  },
  {
    slug: 'island-hopping-lunch',
    name: 'Island Hopping Lunch',
    description:
      'Three neighbouring islets, one long lunch. Sandbars, a sheltered swim and a grilled catch served on the beach.',
    rate: 3600,
    duration: 'Full day · 7 hours',
    includes: ['Bangka & crew', 'Snorkel gear', 'Beach lunch', 'Cold drinks', 'Sunscreen & shade'],
    image: { src: img('photo-1573843981267-be1999ff37cd', 900), alt: 'Aerial view of a turquoise bay and pale sandbar' },
    badge: 'Guest favourite',
  },
];

/* ---------- packages ---------- */

export interface ResortPackage {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  priceNote: string;
  nights: number;
  capacity: number;
  includes: string[];
  image: { src: string; alt: string };
  applies: 'overnight' | 'day' | 'both';
  badge?: string;
}

export const PACKAGES: ResortPackage[] = [
  {
    slug: 'honeymoon-escape',
    name: 'Honeymoon Escape',
    tagline: 'Three nights, no clocks',
    description:
      'Three nights in the Oceanview Suite with a private beach dinner, a couples’ ritual at the spa and a sunrise sail.',
    price: 34500,
    priceNote: 'per couple · 3 nights',
    nights: 3,
    capacity: 2,
    includes: ['3 nights, Oceanview Suite', 'Daily breakfast', 'Private beach dinner for two', '90-min couples’ spa ritual', 'Sunset cruise for two'],
    image: { src: img('photo-1582719508461-905c673771fd', 900), alt: 'Quiet suite interior dressed for a honeymoon stay' },
    applies: 'overnight',
    badge: 'Couples’ pick',
  },
  {
    slug: 'family-cove-package',
    name: 'Family Cove Package',
    tagline: 'Two nights everyone remembers',
    description:
      'Two nights in the Garden Villa with a beachfront cottage for the day and unlimited cove club mornings for the children.',
    price: 28000,
    priceNote: 'per group · 2 nights',
    nights: 2,
    capacity: 4,
    includes: ['2 nights, Tropical Garden Villa', 'Daily breakfast', '1-day Beachfront Cottage', 'Cove Club access (ages 4–12)', 'Late check-out to 1:00 pm'],
    image: { src: img('photo-1602002418082-a4443e081dd1', 900), alt: 'Garden villa veranda where families gather' },
    applies: 'overnight',
  },
  {
    slug: 'reef-discovery',
    name: 'Reef Discovery',
    tagline: 'Two nights, two reefs',
    description:
      'Two nights in the Garden Villa with guided snorkeling at Turtle Reef and a half-day island hopping lunch.',
    price: 24500,
    priceNote: 'per couple · 2 nights',
    nights: 2,
    capacity: 2,
    includes: ['2 nights, Tropical Garden Villa', 'Daily breakfast', '2 × Reef & Snorkel Tour', 'Island hopping lunch', 'Gear & towels'],
    image: { src: img('photo-1544551763-46a013bb70d5', 900), alt: 'Clear water over a coral garden at Turtle Reef' },
    applies: 'overnight',
  },
  {
    slug: 'cove-day-pass-duo',
    name: 'Cove Day Pass for Two',
    tagline: 'One perfect day by the water',
    description:
      'Two day passes with lunch, a beachfront cottage held for your group and a sunset drink at the grill.',
    price: 2800,
    priceNote: 'per couple · day use',
    nights: 0,
    capacity: 2,
    includes: ['2 × Cove Day Pass', 'Lunch at the grill', 'Shared Beachfront Cottage', 'Welcome drinks', 'Towel & shower use'],
    image: { src: img('photo-1507525428034-b723cf961d3e', 900), alt: 'Day guests relaxing on the sand at Solmere Bay' },
    applies: 'day',
    badge: 'Great value',
  },
];

/* ---------- experiences ---------- */

export interface Experience {
  title: string;
  text: string;
  image: string;
  alt: string;
  meta: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Cove Spa Rituals',
    text: 'Coconut-polish scrubs, warm-shell massages and open-air pavilions scented with frangipani. Never rushed, always tailored.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    alt: 'Spa stones and orchid beside a massage setting',
    meta: 'Daily 9:00 – 20:00 · From ₱2,200',
  },
  {
    title: 'Reef Snorkeling',
    text: 'Glide over coral gardens with our marine guides — turtles, rays and clouds of reef fish, twenty minutes by boat.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Snorkeler over a coral reef in clear water',
    meta: 'Twice daily · From ₱2,800',
  },
  {
    title: 'Private Beach Dining',
    text: 'A lantern-lit table at the water’s edge, island-caught seafood and a menu written around your evening.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    alt: 'Candlelit private dining table in a restaurant',
    meta: 'Nightly · From ₱4,500 per couple',
  },
  {
    title: 'Sunset Cruises',
    text: 'Drift past the headlands on our wooden sloop as the sky turns gold — champagne, canapés and utter quiet.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    alt: 'Sailboat on calm water at sunset',
    meta: 'Daily 17:00 · From ₱3,200',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'We arrived tired and left different people. The pool villa was so quiet we could hear the palms move.',
    name: 'Elena & Marc Whitfield',
    detail: 'Private Pool Villa · 6 nights',
  },
  {
    quote: 'Dinner on the sand, our daughter asleep in the garden villa, the bay completely still. We talk about it weekly.',
    name: 'Priya Raghavan',
    detail: 'Tropical Garden Villa · 4 nights',
  },
  {
    quote: 'The staff remembered everything — how we take coffee, which reef we loved. The residence made our reunion effortless.',
    name: 'Daniel Okafor',
    detail: 'Grand Horizon Residence · 5 nights',
  },
];

export const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1400&auto=format&fit=crop', alt: 'Infinity pool blending into the bay at sunset', caption: 'Horizon pool' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop', alt: 'Pale sand beach with turquoise shallows', caption: 'Cove beach' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop', alt: 'Calm suite interior with natural textures', caption: 'Oceanview Suite' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop', alt: 'Spa setting with towels and orchid', caption: 'Cove Spa' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop', alt: 'Intimate dining room set for dinner', caption: 'Beachfront dining' },
  { src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1400&auto=format&fit=crop', alt: 'Aerial view of turquoise bay and sandbar', caption: 'Solmere Bay' },
];

export const AMENITIES = [
  { title: 'Horizon Infinity Pool', text: '40 metres of still water facing the sunrise, with a quiet shallow shelf for slow afternoons.', icon: 'waves' },
  { title: 'Cove Spa & Bathhouse', text: 'Six open-air pavilions, herbal steam and a sea-view relaxation deck.', icon: 'leaf' },
  { title: 'Beachfront Dining', text: 'Two restaurants and a barefoot grill serving island produce and day-boat catch.', icon: 'cloche' },
  { title: 'Marine & Sail Centre', text: 'Snorkeling, kayaks, paddleboards and our wooden sloop for sunset cruises.', icon: 'sail' },
  { title: 'Garden Yoga Shala', text: 'Sunrise salutations and evening breathwork beneath the rain trees.', icon: 'sun' },
  { title: 'Family Cove Club', text: 'Supervised mornings of reef hunts, baking and beach games for ages 4–12.', icon: 'shell' },
  { title: 'Library & Cinema', text: 'A shaded library of travel writing and a weekly open-air film night.', icon: 'book' },
  { title: 'Fitness Pavilion', text: 'Technogym equipment, personal sessions and reef-view cardio decks.', icon: 'pulse' },
];

/* ---------- contact, messenger & directions ---------- */

export const CONTACT = {
  reservations: 'stay@aureliacove.ph',
  phone: '+63 917 555 0142',
  viber: '+63 917 555 0142',
  addressLines: ['123 Dummy Street', 'Sample City, 12345'],
  hours: 'Reservations desk: 8:00 – 20:00 daily',
  frontDesk: 'Front desk daily, 6:00 AM – 10:00 PM',
  facebook: 'https://www.facebook.com/aureliacove',
  messenger: 'https://messenger.com',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Solmere+Bay',
};

export const DIRECTIONS = [
  {
    icon: 'plane',
    title: 'By air',
    text: 'Fly into Solmere Regional Airport (SME), 45 minutes from the cove. Private transfers are arranged with every confirmed booking.',
    meta: '45 minutes',
  },
  {
    icon: 'boat',
    title: 'By sea',
    text: 'From Solmere Marina our pump boat crosses the bay to the resort landing. Departures run on the hour from 6:00 am to 8:00 pm.',
    meta: '10 minutes',
  },
  {
    icon: 'road',
    title: 'By road',
    text: 'Take Coastal Road south for 28 km from the city, then Lantern Point Road to the Aurelia Cove gate. Free parking beside reception.',
    meta: '1 hour 10 minutes',
  },
];

/* ---------- lookup + booking helpers ---------- */

export function getAccommodation(slug: string | undefined): Accommodation | undefined {
  return ACCOMMODATIONS.find((a) => a.slug === slug);
}

export type TripType = 'overnight' | 'day';
export type BookableKind = 'room' | 'cottage' | 'day-tour' | 'package';
export type PricingUnit = 'night' | 'day' | 'person' | 'flat';

export interface Bookable {
  id: string;
  kind: BookableKind;
  slug: string;
  name: string;
  rate: number;
  unit: PricingUnit;
  capacity: number;
  note: string;
  image: string;
  label: string;
}

const roomBookable = (r: Accommodation): Bookable => ({
  id: `room:${r.slug}`,
  kind: 'room',
  slug: r.slug,
  name: r.name,
  rate: r.rate,
  unit: 'night',
  capacity: r.guests,
  note: `Sleeps ${r.guests} · ${r.beds}`,
  image: r.images[0].src,
  label: 'Room',
});

const cottageBookable = (c: Cottage, unit: PricingUnit): Bookable => ({
  id: `cottage:${c.slug}:${unit}`,
  kind: 'cottage',
  slug: c.slug,
  name: c.name,
  rate: unit === 'night' ? c.overnightRate : c.dayRate,
  unit,
  capacity: c.capacity,
  note: `Seats ${c.capacity} · ${unit === 'night' ? 'overnight' : c.hours}`,
  image: c.image.src,
  label: 'Cottage',
});

const dayTourBookable = (d: DayTour): Bookable => ({
  id: `day-tour:${d.slug}`,
  kind: 'day-tour',
  slug: d.slug,
  name: d.name,
  rate: d.rate,
  unit: 'person',
  capacity: 40,
  note: `Per person · ${d.duration}`,
  image: d.image.src,
  label: 'Day tour',
});

const packageBookable = (p: ResortPackage): Bookable => ({
  id: `package:${p.slug}`,
  kind: 'package',
  slug: p.slug,
  name: p.name,
  rate: p.price,
  unit: 'flat',
  capacity: p.capacity,
  note: p.priceNote,
  image: p.image.src,
  label: 'Package',
});

export function bookablesFor(trip: TripType): Bookable[] {
  if (trip === 'overnight') {
    return [
      ...ACCOMMODATIONS.map(roomBookable),
      ...COTTAGES.map((c) => cottageBookable(c, 'night')),
      ...PACKAGES.filter((p) => p.applies !== 'day').map(packageBookable),
    ];
  }
  return [
    ...DAY_TOURS.map(dayTourBookable),
    ...COTTAGES.map((c) => cottageBookable(c, 'day')),
    ...PACKAGES.filter((p) => p.applies !== 'overnight').map(packageBookable),
  ];
}

export function findBookable(id: string): Bookable | undefined {
  return bookablesFor('overnight').find((b) => b.id === id)
    ?? bookablesFor('day').find((b) => b.id === id);
}

export const BOOKABLE_GROUPS: Record<TripType, { kind: BookableKind; title: string; note: string }[]> = {
  overnight: [
    { kind: 'room', title: 'Rooms & villas', note: 'Per night, breakfast included' },
    { kind: 'cottage', title: 'Cottages', note: 'Overnight rate, includes cottage hours' },
    { kind: 'package', title: 'Packages', note: 'Bundled stays at a single price' },
  ],
  day: [
    { kind: 'day-tour', title: 'Day tours', note: 'Per person, gear and guide included' },
    { kind: 'cottage', title: 'Cottages', note: 'Day use, 8:00 – 17:00' },
    { kind: 'package', title: 'Day packages', note: 'Bundled day use at a single price' },
  ],
};

export function formatPHP(n: number): string {
  const digits = new Intl.NumberFormat('en-PH', { maximumFractionDigits: n % 1 === 0 ? 0 : 2 }).format(n);
  return `₱${digits}`;
}

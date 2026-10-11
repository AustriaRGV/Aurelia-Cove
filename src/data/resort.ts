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
    rate: 280,
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
    rate: 420,
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
    rate: 650,
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
    rate: 950,
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
    meta: 'Daily 9:00 – 20:00 · From $60',
  },
  {
    title: 'Reef Snorkeling',
    text: 'Glide over coral gardens with our marine guides — turtles, rays and clouds of reef fish, twenty minutes by boat.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Snorkeler over a coral reef in clear water',
    meta: 'Twice daily · From $45',
  },
  {
    title: 'Private Beach Dining',
    text: 'A lantern-lit table at the water’s edge, island-caught seafood and a menu written around your evening.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    alt: 'Candlelit private dining table in a restaurant',
    meta: 'Nightly · From $120 per couple',
  },
  {
    title: 'Sunset Cruises',
    text: 'Drift past the headlands on our wooden sloop as the sky turns gold — champagne, canapés and utter quiet.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    alt: 'Sailboat on calm water at sunset',
    meta: 'Daily 17:00 · From $85',
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

export const CONTACT = {
  reservations: 'stay@aurelia-cove.example',
  phone: '+1 (555) 014-2890',
  addressLines: ['1 Lantern Point Road', 'Solmere Bay'],
  hours: 'Reservations desk: 8:00 – 20:00 daily',
};

export function getAccommodation(slug: string | undefined): Accommodation | undefined {
  return ACCOMMODATIONS.find((a) => a.slug === slug);
}

export function formatUSD(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: n % 1 === 0 ? 0 : 2 }).format(n);
}

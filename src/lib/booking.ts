const SERVICE_RATE = 0.12; // 12% service charge
const CLEANING_FEE = 45; // flat fee in USD

export function nightsBetween(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const a = new Date(checkIn + 'T12:00:00');
  const b = new Date(checkOut + 'T12:00:00');
  const diff = Math.round((b.getTime() - a.getTime()) / 86400000);
  return Number.isFinite(diff) ? diff : 0;
}

export function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function addDaysISO(base: string, days: number): string {
  const d = base ? new Date(base + 'T12:00:00') : new Date();
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export interface PriceBreakdown {
  nights: number;
  subtotal: number;
  service: number;
  cleaning: number;
  total: number;
}

export function priceBreakdown(rate: number, checkIn: string, checkOut: string): PriceBreakdown {
  const nights = Math.max(0, nightsBetween(checkIn, checkOut));
  const subtotal = nights * rate;
  const service = subtotal * SERVICE_RATE;
  const cleaning = nights > 0 ? CLEANING_FEE : 0;
  return { nights, subtotal, service, cleaning, total: subtotal + service + cleaning };
}

export function validateDates(checkIn: string, checkOut: string): string | null {
  if (!checkIn || !checkOut) return 'Please choose both check-in and check-out dates.';
  const nights = nightsBetween(checkIn, checkOut);
  if (nights <= 0) return 'Check-out must be at least one day after check-in.';
  if (checkIn < todayISO()) return 'Check-in cannot be in the past.';
  return null;
}

export function makeReference(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `AC-${s}`;
}

export function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}

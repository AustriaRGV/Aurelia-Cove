import { CONTACT } from '../data/resort';

/** Messenger glyph — the two overlapping speech bubbles guests recognise. */
export function MessengerIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.19.16.15.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.98-.87c.17-.07.35-.09.52-.04.91.25 1.88.38 2.91.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2Zm6 7.46-2.94 4.66c-.47.74-1.47.93-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63Z"
      />
    </svg>
  );
}

/** Inline button that opens a Messenger conversation with the resort. */
export default function MessengerButton({
  variant = 'gold',
  label = 'Message us on Messenger',
}: {
  variant?: 'gold' | 'outline';
  label?: string;
}) {
  return (
    <a
      className={`btn btn-messenger${variant === 'outline' ? ' btn-messenger-outline' : ''}`}
      href={CONTACT.messenger}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens Facebook Messenger in a new tab)`}
    >
      <MessengerIcon />
      {label}
    </a>
  );
}

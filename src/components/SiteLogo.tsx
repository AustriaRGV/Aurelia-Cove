export default function SiteLogo({ size = 40 }: { size?: number }) {
  // Decorative mark — the adjacent brand text carries the accessible name.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="30" fill="#1E3A2F" />
      <circle cx="32" cy="32" r="29" fill="none" stroke="#C6A87C" strokeWidth="1.5" />
      <circle cx="32" cy="21" r="6" fill="#FAF7F0" />
      <path
        d="M14 34c5.5-3.5 11-3.5 18 0 7 3.5 12.5 3.5 18 0"
        fill="none"
        stroke="#C6A87C"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18 42c4.5-3 9-3 14 0 5 3 9.5 3 14 0"
        fill="none"
        stroke="#FAF7F0"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.92"
      />
      <path
        d="M22 48.5c3.5-2.2 7-2.2 10 0 3 2.2 6.5 2.2 10 0"
        fill="none"
        stroke="#C6A87C"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

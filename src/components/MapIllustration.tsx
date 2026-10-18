/** Illustrated map of the bay, shared by the Home location section and the Contact map card. */
export default function MapIllustration({ slice = false }: { slice?: boolean }) {
  return (
    <svg
      viewBox="0 0 420 340"
      role="img"
      aria-label="Illustrated map of Solmere Bay"
      preserveAspectRatio={slice ? 'xMidYMid slice' : 'xMidYMid meet'}
    >
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

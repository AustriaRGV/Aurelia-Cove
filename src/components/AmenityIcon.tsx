export default function AmenityIcon({ name }: { name: string }) {
  const common = { fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'waves':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M2 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></svg>);
    case 'leaf':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M5 19C5 9 13 4 20 4c0 8-5 15-15 15Z" /><path d="M5 19c3-5 7-9 11-11" /></svg>);
    case 'cloche':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M4 17h16" /><path d="M5 17a7 7 0 0 1 14 0" /><path d="M12 10V8" /><circle cx="12" cy="7" r="1" /></svg>);
    case 'sail':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M12 3v16" /><path d="M12 4c4 3 6 7 6 11H6c0-4 2-8 6-11Z" /><path d="M4 20h16" /></svg>);
    case 'sun':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" /></svg>);
    case 'shell':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M12 4c-4 0-7 3.5-7 8 0 3 2 6 7 8 5-2 7-5 7-8 0-4.5-3-8-7-8Z" /><path d="M12 4v16M8 6l3 14M16 6l-3 14" /></svg>);
    case 'book':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></svg>);
    default:
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M3 12h4l2-6 4 12 2.5-6H21" /></svg>);
  }
}

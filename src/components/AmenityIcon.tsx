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
    case 'pulse':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M3 12h4l2-6 4 12 2.5-6H21" /></svg>);
    case 'plane':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M10 3.5 12 3l8 8-1.5.5-3-3-3.5 1.5 1.5 3.5-2 2-4-4-3 1 .5 1.5-1.5.5-1.5-2.5L3 14l1.5.5 1.5-1.5 1 .5 4 4 2-2 3.5 1.5 3-3L14 9l.5-1.5L10 3.5Z" /></svg>);
    case 'boat':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M4 14h16l-2.5 4.5a3 3 0 0 1-2.6 1.5H9.1a3 3 0 0 1-2.6-1.5L4 14Z" /><path d="M12 3v11M12 4c3 2.5 5 6 5 9H7c0-3 2-6.5 5-9Z" /></svg>);
    case 'road':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M7 3 4 21M17 3l3 18M12 4v3M12 11v3M12 18v3" /></svg>);
    case 'pin':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>);
    case 'phone':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L16.5 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" /></svg>);
    case 'mail':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="1.5" /><path d="m3.6 6.5 8.4 6 8.4-6" /></svg>);
    case 'map':
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="m3 6.5 6-2.5 6 2.5 6-2.5v13.5l-6 2.5-6-2.5-6 2.5Z" /><path d="M9 4v13.5M15 6.5V20" /></svg>);
    default:
      return (<svg viewBox="0 0 24 24" {...common} aria-hidden="true"><path d="M3 12h4l2-6 4 12 2.5-6H21" /></svg>);
  }
}

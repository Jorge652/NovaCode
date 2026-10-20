import { useId } from 'react';

type IsotypeProps = { className?: string };

/**
 * Isotipo NovaCode: "N" con degradado cian → azul eléctrico → índigo sobre un mosaico
 * azul noche, con filo luminoso en la diagonal y un trazo "/" que la cruza por detrás.
 */
export function Isotype({ className = 'size-9' }: IsotypeProps) {
  // useId puede incluir ":" o "«»", no válidos dentro de url(#...).
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const g = (name: string) => `nc-${name}-${id}`;

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`shrink-0 ${className}`}>
      <defs>
        <linearGradient id={g('slash')} gradientUnits="userSpaceOnUse" x1="44.5" y1="17" x2="20.5" y2="49">
          <stop offset="0" stopColor="#2E7BE6" stopOpacity="0.9" />
          <stop offset="0.42" stopColor="#1E3A8A" stopOpacity="0.25" />
          <stop offset="0.6" stopColor="#1E40AF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#5CD6F5" />
        </linearGradient>
        <linearGradient id={g('left')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3DD5F3" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id={g('diag')} gradientUnits="userSpaceOnUse" x1="20" y1="15" x2="45" y2="51">
          <stop offset="0" stopColor="#2563EB" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id={g('right')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1D4ED8" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#0B1024" />
      <rect x="0.5" y="0.5" width="63" height="63" rx="13.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.07" />
      <line x1="44.5" y1="17" x2="20.5" y2="49" stroke={`url(#${g('slash')})`} strokeWidth="5.5" strokeLinecap="round" />
      <g strokeWidth="0.8" strokeLinejoin="round">
        <polygon points="18,15 23.5,15 23.5,42 18,42" fill={`url(#${g('left')})`} stroke={`url(#${g('left')})`} />
        <polygon points="41.7,31 47.2,27 47.2,51 41.7,51" fill={`url(#${g('right')})`} stroke={`url(#${g('right')})`} />
        <polygon points="18,15 23.5,15 47.2,51 41.7,51" fill={`url(#${g('diag')})`} stroke={`url(#${g('diag')})`} />
      </g>
      <line x1="23.5" y1="23.4" x2="41.7" y2="51" stroke="#7DE3FF" strokeWidth="1.3" />
    </svg>
  );
}

type LogoProps = { inverted?: boolean; className?: string };

/** Isotipo + logotipo: "Nova" en tono base y "Code" en cian, como en la propuesta de marca. */
export function Logo({ inverted = false, className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Isotype />
      <span className="font-display text-[1.35rem] leading-none font-extrabold tracking-tight">
        <span className={inverted ? 'text-white' : 'text-ink'}>Nova</span>
        <span className={inverted ? 'text-cyan-light' : 'text-cyan'}>Code</span>
      </span>
    </span>
  );
}

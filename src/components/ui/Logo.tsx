import { useId } from 'react';

type IsotypeProps = {
  /** Color del fondo donde se dibuja: crea la separación que entrelaza las piezas. */
  gap?: string;
  className?: string;
};

/**
 * Isotipo NovaCode: una "N" geométrica de patas azul metalizado y diagonal cobre,
 * entrelazadas (la diagonal pasa sobre la pata izquierda y bajo la derecha).
 */
export function Isotype({ gap = '#FFFFFF', className = 'size-9' }: IsotypeProps) {
  // useId puede incluir ":" o "«»", no válidos dentro de url(#...).
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const blue = `nc-blue-${id}`;
  const copper = `nc-copper-${id}`;

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`shrink-0 ${className}`}>
      <defs>
        <linearGradient id={blue} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#60A5FA" />
          <stop offset="0.45" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id={copper} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6C7A1" />
          <stop offset="0.5" stopColor="#C9825A" />
          <stop offset="1" stopColor="#8A4B2A" />
        </linearGradient>
      </defs>
      {/* Orden de capas: pata izquierda → diagonal → pata derecha (entrelazado). */}
      <polygon points="9,5 23,5 18,59 4,59" fill={`url(#${blue})`} stroke={gap} strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="10.5,6.5 13.5,6.5 8.6,57.5 5.6,57.5" fill="#FFFFFF" opacity="0.28" />
      <polygon points="9,5 24,5 55,59 40,59" fill={`url(#${copper})`} stroke={gap} strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="46,5 60,5 55,59 41,59" fill={`url(#${blue})`} stroke={gap} strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="47.5,6.5 50.5,6.5 45.6,57.5 42.6,57.5" fill="#FFFFFF" opacity="0.28" />
    </svg>
  );
}

type LogoProps = { inverted?: boolean; className?: string };

/** Isotipo + logotipo: "Nova" en negrita y "Code" en trazo fino, como en el manual de marca. */
export function Logo({ inverted = false, className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Isotype gap={inverted ? '#101828' : '#FFFFFF'} />
      <span
        className={`font-display text-[1.35rem] leading-none tracking-tight ${inverted ? 'text-white' : 'text-ink'}`}
      >
        <span className="font-extrabold">Nova</span>
        <span className="font-light">Code</span>
      </span>
    </span>
  );
}

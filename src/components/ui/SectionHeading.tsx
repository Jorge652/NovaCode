import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = 'center', id }: Props) {
  const centered = align === 'center';
  return (
    <div className={`reveal max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="text-xs font-semibold tracking-[0.2em] text-electric uppercase sm:text-sm">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-display text-3xl leading-tight font-extrabold tracking-tight text-balance text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{description}</p>}
    </div>
  );
}

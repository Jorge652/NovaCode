import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

type Variant = 'whatsapp' | 'primary' | 'outline' | 'outline-light';
type Size = 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  // CTA de contacto: azul Electric según el manual de marca, con icono de WhatsApp.
  whatsapp: 'bg-electric text-white hover:bg-electric-dark shadow-[0_8px_20px_-8px_rgb(37_99_235/0.55)]',
  primary: 'bg-electric text-white hover:bg-electric-dark shadow-[0_8px_20px_-8px_rgb(37_99_235/0.5)]',
  outline: 'border border-silver-soft bg-white text-ink hover:border-silver hover:bg-mist',
  'outline-light': 'border border-white/25 text-white hover:border-white/50 hover:bg-white/5',
};

const SIZES: Record<Size, string> = {
  md: 'min-h-11 px-5 py-2 text-sm',
  lg: 'min-h-13 px-6 py-3 text-base',
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  external?: boolean;
};

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  icon,
  external = false,
  className = '',
  children,
  ...rest
}: Props) {
  const leading = icon ?? (variant === 'whatsapp' ? <WhatsAppIcon className="size-5 shrink-0" /> : null);

  return (
    <a
      {...rest}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl text-center leading-snug font-semibold transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {leading}
      {children}
    </a>
  );
}

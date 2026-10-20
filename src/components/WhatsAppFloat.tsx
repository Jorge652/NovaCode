import { WA_MESSAGES, waLink } from '../config/site';
import { useScrolledPast } from '../hooks/useScroll';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

/** Acceso directo a WhatsApp que aparece al dejar atrás el Hero. */
export function WhatsAppFloat() {
  const visible = useScrolledPast(560);

  return (
    <a
      href={waLink(WA_MESSAGES.business)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-4 z-40 grid size-14 place-items-center rounded-full bg-wa text-ink shadow-[0_12px_28px_-8px_rgb(16_24_40/0.35)] transition-[opacity,transform,background-color] duration-300 hover:bg-wa-dark sm:right-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

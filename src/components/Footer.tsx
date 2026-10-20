import { MapPin } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, WA_MESSAGES, WHATSAPP_DISPLAY, waLink } from '../config/site';
import type { LegalDoc } from './LegalDialog';
import { Logo } from './ui/Logo';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

type Props = { onOpenLegal: (doc: LegalDoc) => void };

export function Footer({ onOpenLegal }: Props) {
  const socials = SOCIAL_LINKS.filter((social) => social.href);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-silver-soft bg-mist">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Logo />
          <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.2em] text-ink-soft uppercase">Desarrollo de software</p>
          <p className="mt-1 text-sm text-muted italic">Innovación en cada línea de código.</p>
          <p className="mt-3 max-w-sm leading-relaxed text-muted">
            <strong className="font-semibold text-ink">NovaCode</strong> - Desarrollo de Software Profesional en
            Ecuador. Conectando ideas con soluciones en tiempo récord.
          </p>
        </div>

        <nav aria-label="Secciones">
          <h2 className="text-sm font-semibold text-ink">Navegación</h2>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-muted transition-colors hover:text-electric">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-ink">Contacto</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={waLink(WA_MESSAGES.business)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-electric"
              >
                <WhatsAppIcon className="size-4 text-[#128C4B]" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-muted">
              <MapPin className="size-4" />
              Ecuador
            </li>
          </ul>
          {socials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-lg border border-silver-soft bg-white px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-silver hover:text-ink"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Legal</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="text-muted transition-colors hover:text-electric"
              >
                Política de privacidad
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onOpenLegal('terms')}
                className="text-muted transition-colors hover:text-electric"
              >
                Términos y condiciones
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x">
        <div className="silver-line" />
        <p className="py-6 text-center text-sm text-muted">
          Copyright © {year} NovaCode. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

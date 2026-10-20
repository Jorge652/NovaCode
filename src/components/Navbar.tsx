import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WA_MESSAGES, waLink } from '../config/site';
import { useActiveSection, useScrolledPast } from '../hooks/useScroll';
import { ButtonLink } from './ui/Button';
import { Logo } from './ui/Logo';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolledPast(8);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const elevated = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        elevated
          ? 'border-b border-silver-soft bg-white/90 shadow-card backdrop-blur-md'
          : 'border-b border-transparent bg-white/0'
      }`}
    >
      <nav aria-label="Principal" className="container-x flex h-16 items-center justify-between gap-4 sm:h-18">
        <a href="#inicio" aria-label="NovaCode, ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-electric' : 'text-ink-soft hover:bg-mist hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Envoltorio: `hidden` no puede convivir con el `inline-flex` base del botón. */}
          <div className="hidden sm:block">
            <ButtonLink href={waLink(WA_MESSAGES.business)} external variant="whatsapp">
              Cotizar por WhatsApp
            </ButtonLink>
          </div>
          <a
            href={waLink(WA_MESSAGES.business)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cotizar por WhatsApp"
            className="grid size-11 place-items-center rounded-xl bg-electric text-white transition-colors hover:bg-electric-dark sm:hidden"
          >
            <WhatsAppIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-11 place-items-center rounded-xl border border-silver-soft bg-white text-ink transition-colors hover:bg-mist lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-silver-soft bg-white lg:hidden"
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                  active === link.id ? 'bg-electric-soft text-electric' : 'text-ink hover:bg-mist'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <ButtonLink
              href={waLink(WA_MESSAGES.business)}
              external
              variant="whatsapp"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Cotizar por WhatsApp
            </ButtonLink>
          </li>
        </ul>
      </div>

      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="absolute inset-x-0 top-full h-dvh bg-ink/40 backdrop-blur-[2px] lg:hidden"
        />
      )}
    </header>
  );
}

import { ArrowDown, ShieldCheck, Zap } from 'lucide-react';
import { WA_MESSAGES, waLink } from '../config/site';
import { revealDelay } from '../lib/reveal';
import { HeroMockup } from './HeroMockup';
import { ButtonLink } from './ui/Button';
import { EcuadorFlag } from './ui/EcuadorFlag';

const BADGES = [
  { icon: Zap, text: 'Landing Pages y Prototipos funcionales desde 48 horas.' },
  { icon: ShieldCheck, text: 'Software 100% a medida sin mensualidades ocultas.' },
];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-0 grid-pattern [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-0 -z-0 size-[36rem] rounded-full bg-electric/[0.07] blur-3xl" />

      <div className="container-x relative grid items-center gap-14 pt-28 pb-20 sm:pt-32 md:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:grid-cols-[1.15fr_0.85fr] lg:pt-32 lg:pb-24 xl:pt-36">
        <div className="max-w-2xl lg:max-w-none">
          <p className="inline-flex items-center gap-2 rounded-full border border-silver-soft bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-wa opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-wa" />
            </span>
            Desarrollo de software ágil en Ecuador
            <EcuadorFlag />
          </p>

          <h1
            id="hero-title"
            className="mt-5 font-display text-[2.15rem] leading-[1.12] font-extrabold tracking-tight text-balance text-ink sm:text-5xl md:text-[3.25rem] lg:text-[3.05rem] xl:text-[3.5rem]"
          >
            Digitalizamos tu negocio y automatizamos tus procesos{' '}
            <span className="relative text-electric sm:whitespace-nowrap">
              en tiempo récord.
              <span className="absolute inset-x-0 -bottom-1 hidden h-[3px] rounded-full sm:block bg-gradient-to-r from-silver via-silver/70 to-transparent" />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            Software a medida, tiendas online y sistemas de gestión diseñados para escalar tu empresa en Ecuador.
            Resultados profesionales, sin complicaciones ni tiempos de espera infinitos.
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {BADGES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm font-medium text-ink-soft sm:text-base">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-electric-soft text-electric">
                  <Icon className="size-4" />
                </span>
                <span className="pt-0.5">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:max-w-md lg:flex-col xl:max-w-none xl:flex-row">
            <ButtonLink href={waLink(WA_MESSAGES.business)} external variant="whatsapp" size="lg" className="sm:whitespace-nowrap">
              Cotizar mi Proyecto por WhatsApp
            </ButtonLink>
            <ButtonLink
              href="#servicios"
              variant="outline"
              size="lg"
              className="sm:whitespace-nowrap"
              icon={<ArrowDown className="size-4 shrink-0" />}
            >
              Ver Servicios y Soluciones
            </ButtonLink>
          </div>

          <p className="mt-5 text-sm text-muted">
            Respuesta directa de un desarrollador · Cotización sin compromiso
          </p>
        </div>

        <div className="reveal px-2 sm:px-6 lg:px-0" style={revealDelay(120)}>
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

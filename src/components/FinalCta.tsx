import { WA_MESSAGES, waLink } from '../config/site';
import { ButtonLink } from './ui/Button';

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-40 grid-pattern [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]" />
          <div className="pointer-events-none absolute -top-32 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-electric/25 blur-3xl" />
          <div className="silver-line absolute inset-x-10 top-0 opacity-60" />

          <div className="relative mx-auto max-w-2xl">
            <h2
              id="cta-title"
              className="font-display text-3xl leading-tight font-extrabold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.75rem]"
            >
              ¿Listo para automatizar tu negocio o{' '}
              <span className="text-[#7FA6FF]">impulsar tu proyecto?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-white/75 sm:text-lg">
              Contáctanos hoy mismo y recibe una cotización clara, directa y sin compromiso.
            </p>
            <ButtonLink
              href={waLink(WA_MESSAGES.developer)}
              external
              variant="whatsapp"
              size="lg"
              className="mt-9 w-full sm:w-auto"
            >
              Hablar con un Desarrollador por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

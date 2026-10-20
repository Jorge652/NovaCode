import { revealDelay } from '../lib/reveal';
import { SectionHeading } from './ui/SectionHeading';

const STEPS = [
  { title: 'Nos escribes', text: 'Cuéntanos tu idea o necesidad por WhatsApp, sin formularios largos.' },
  { title: 'Cotización clara', text: 'Recibes alcance, tiempo y precio definidos. Sin letras pequeñas.' },
  { title: 'Prototipo rápido', text: 'Ves avances funcionales en días y ajustamos contigo en cada entrega.' },
  { title: 'Entrega y soporte', text: 'Publicamos tu solución y te acompañamos con soporte local directo.' },
];

export function Process() {
  return (
    <section aria-labelledby="proceso-title" className="border-y border-silver-soft bg-mist py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading id="proceso-title" eyebrow="Cómo trabajamos" title="De la idea a la solución en cuatro pasos" />

        <div className="relative mt-14">
          <div aria-hidden="true" className="silver-line absolute top-6 right-[12.5%] left-[12.5%] hidden lg:block" />
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                style={revealDelay(index * 90)}
                className="reveal relative flex gap-4 sm:flex-col lg:items-center lg:text-center"
              >
                <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-electric/25 bg-white font-display text-lg font-extrabold text-electric shadow-card">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted lg:mx-auto lg:max-w-[15rem]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

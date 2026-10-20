import { FileX2, Gauge, Headset } from 'lucide-react';
import { revealDelay } from '../lib/reveal';
import { SectionHeading } from './ui/SectionHeading';

const PILLARS = [
  {
    icon: Gauge,
    title: 'Velocidad Real de Entrega',
    text: 'Primeros entregables y prototipos listos en 24-48 horas.',
  },
  {
    icon: FileX2,
    title: 'Cero Procesos Manuales',
    text: 'Di adiós al papel y al Excel. Automatiza ventas, inventarios y clientes.',
  },
  {
    icon: Headset,
    title: 'Soporte Local y Personalizado',
    text: 'Asesoría técnica directa de desarrolladores ecuatorianos.',
  },
];

export function Pillars() {
  return (
    <section id="ventajas" aria-labelledby="ventajas-title" className="bg-mist py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          id="ventajas-title"
          eyebrow="Por qué NovaCode"
          title="Tecnología seria, entregada a la velocidad de tu negocio"
          description="Combinamos procesos ágiles con cercanía local para que veas resultados desde la primera semana."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {PILLARS.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              style={revealDelay(index * 90)}
              className="reveal group flex gap-4 rounded-2xl border border-silver-soft bg-white p-6 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-silver hover:shadow-lift sm:gap-5 sm:p-7 lg:flex-col lg:gap-4 lg:p-8"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-cyan-light ring-1 ring-white/5 transition-colors duration-300 group-hover:bg-electric group-hover:text-white">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

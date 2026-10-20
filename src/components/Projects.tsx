import { BadgeCheck, GraduationCap, ShoppingCart, Store } from 'lucide-react';
import { revealDelay } from '../lib/reveal';
import { SectionHeading } from './ui/SectionHeading';

const CASES = [
  {
    icon: Store,
    tag: 'Comercio local',
    title: 'Sistema de inventario y punto de venta para comercio local.',
    features: ['Inventario', 'Punto de venta', 'Reportes diarios'],
  },
  {
    icon: ShoppingCart,
    tag: 'E-commerce',
    title: 'Tienda e-commerce con catálogo digital y pedidos por WhatsApp.',
    features: ['Catálogo', 'Carrito', 'Pedidos a WhatsApp'],
  },
  {
    icon: GraduationCap,
    tag: 'Proyecto de grado',
    title: 'Prototipo web funcional con panel administrativo para proyecto de grado.',
    features: ['Panel admin', 'Base de datos', 'Documentación'],
  },
];

export function Projects() {
  return (
    <section id="clientes" aria-labelledby="clientes-title" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          id="clientes-title"
          eyebrow="Clientes y proyectos"
          title="Proyectos y Soluciones Entregadas"
          description="Cotizaciones 100% personalizadas y ajustadas a la escala de tu necesidad."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {CASES.map(({ icon: Icon, tag, title, features }, index) => (
            <article
              key={tag}
              style={revealDelay(index * 90)}
              className="reveal flex flex-col overflow-hidden rounded-2xl last:sm:col-span-2 last:lg:col-span-1 border border-silver-soft bg-white shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="relative flex items-center justify-between border-b border-silver-soft bg-gradient-to-br from-mist to-white px-6 py-5">
                <span className="grid size-12 place-items-center rounded-xl bg-navy text-cyan-light">
                  <Icon className="size-5" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-silver-soft bg-white px-3 py-1 text-xs font-semibold whitespace-nowrap text-ink-soft">
                  <BadgeCheck className="size-3.5 text-cyan" />
                  {tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg leading-snug font-bold text-ink">{title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-md bg-mist px-2.5 py-1 text-xs font-medium text-ink-soft ring-1 ring-silver-soft"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

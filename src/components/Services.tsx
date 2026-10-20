import { ArrowUpRight, Calculator, Clock, LayoutTemplate, ShoppingBag, Workflow } from 'lucide-react';
import { serviceMessage, waLink } from '../config/site';
import { revealDelay } from '../lib/reveal';
import { SectionHeading } from './ui/SectionHeading';

const SERVICES = [
  {
    icon: LayoutTemplate,
    title: 'Landing Pages de Alta Conversión',
    text: 'Páginas web optimizadas para captar clientes rápidamente y vender productos o servicios.',
    time: '24 a 48 Horas',
    fast: true,
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce y Tiendas Online',
    text: 'Catálogo digital, carrito de compras, pedidos directos a WhatsApp o pagos integrados.',
    time: '3 a 5 Días',
    fast: true,
  },
  {
    icon: Calculator,
    title: 'Sistemas Contables y de Gestión',
    text: 'Control de inventarios, facturación, ventas diarias y clientes adaptado a tu flujo de trabajo.',
    time: 'Desarrollo a medida',
    fast: false,
  },
  {
    icon: Workflow,
    title: 'Automatización de Procesos',
    text: 'Conexión e integración de herramientas para eliminar tareas repetitivas en tu empresa.',
    time: 'Desarrollo a medida',
    fast: false,
  },
];

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          id="servicios-title"
          eyebrow="Servicios para pymes y negocios"
          title="Soluciones digitales listas para trabajar desde el primer día"
          description="Elige lo que tu negocio necesita hoy. Cada proyecto se cotiza a la medida de tu escala."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SERVICES.map(({ icon: Icon, title, text, time, fast }, index) => (
            <article
              key={title}
              style={revealDelay(index * 80)}
              className="reveal group relative flex flex-col rounded-2xl border border-silver-soft bg-white p-6 shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-lift"
            >
              <span className="grid size-12 place-items-center rounded-xl border border-silver-soft bg-mist text-electric transition-colors duration-300 group-hover:border-electric/20 group-hover:bg-electric-soft">
                <Icon className="size-5" />
              </span>

              <h3 className="mt-5 font-display text-lg leading-snug font-bold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{text}</p>

              <div className="silver-line mt-6" />

              <div className="mt-4 flex flex-col items-start gap-3.5">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    fast ? 'bg-electric-soft text-electric' : 'bg-mist text-ink-soft ring-1 ring-silver-soft'
                  }`}
                >
                  <Clock className="size-3.5" />
                  {time}
                </span>
                <a
                  href={waLink(serviceMessage(title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar ${title} por WhatsApp`}
                  className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-ink transition-colors after:absolute after:inset-0 after:rounded-2xl hover:text-electric"
                >
                  Cotizar por WhatsApp
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FileCode2, GraduationCap, Laptop, Timer } from 'lucide-react';
import { WA_MESSAGES, waLink } from '../config/site';
import { revealDelay } from '../lib/reveal';
import { ButtonLink } from './ui/Button';

const POINTS = [
  { icon: Laptop, text: 'Desarrollo de proyectos desde cero, tareas complejas y sistemas para tesis.' },
  { icon: FileCode2, text: 'Código fuente limpio, ordenado y documentado para tu fácil explicación.' },
  { icon: Timer, text: 'Entregas de urgencia garantizadas con confidencialidad total.' },
];

export function Academic() {
  return (
    <section
      id="universitarios"
      aria-labelledby="universitarios-title"
      className="bg-electric-soft/60 py-20 sm:py-24 lg:py-28"
    >
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-electric/15 bg-gradient-to-br from-white via-white to-electric-soft p-5 shadow-card sm:p-10 lg:p-14">
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            <div className="reveal">
              <p className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                <GraduationCap className="size-4" />
                Línea académica
              </p>
              <h2
                id="universitarios-title"
                className="mt-5 font-display text-3xl leading-tight font-extrabold tracking-tight text-balance text-ink sm:text-4xl"
              >
                ¿Necesitas apoyo en tus Proyectos Universitarios?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
                Desarrollo técnico especializado para estudiantes de ingeniería y carreras afines en Ecuador.
              </p>
              <ButtonLink
                href={waLink(WA_MESSAGES.academic)}
                external
                variant="whatsapp"
                size="lg"
                className="mt-8 w-full sm:w-auto"
              >
                Cotizar Proyecto Universitario
              </ButtonLink>
            </div>

            <ul className="flex flex-col gap-4">
              {POINTS.map(({ icon: Icon, text }, index) => (
                <li
                  key={text}
                  style={revealDelay(index * 90)}
                  className="reveal flex items-start gap-4 rounded-2xl border border-silver-soft bg-white/90 p-4 shadow-card backdrop-blur-sm sm:p-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-electric text-white">
                    <Icon className="size-5" />
                  </span>
                  <p className="pt-1 leading-relaxed font-medium text-ink-soft">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

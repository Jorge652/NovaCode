import { CheckCircle2, LayoutDashboard, Package, ShoppingCart, Users } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

const BARS = [38, 56, 44, 70, 62, 84, 76];
const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const ORDERS = [
  { id: '#1042', client: 'Ferretería Andina', total: '$128,50', status: 'Pagado' },
  { id: '#1041', client: 'Café Mitad del Mundo', total: '$64,00', status: 'En ruta' },
  { id: '#1040', client: 'Boutique Costa', total: '$212,90', status: 'Pagado' },
];

const SIDEBAR = [LayoutDashboard, ShoppingCart, Package, Users];

/** Vista ilustrativa de un panel de gestión construido con CSS (sin imágenes). */
export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-electric/10 via-transparent to-silver/30 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-silver/70 bg-white shadow-mockup">
        {/* Barra del navegador */}
        <div className="flex items-center gap-3 border-b border-silver-soft bg-mist px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-silver" />
            <span className="size-2.5 rounded-full bg-silver" />
            <span className="size-2.5 rounded-full bg-silver" />
          </div>
          <div className="flex-1 truncate rounded-md border border-silver-soft bg-white px-3 py-1 text-center text-[11px] text-muted">
            app.tunegocio.ec/panel
          </div>
        </div>

        <div className="flex">
          <aside className="hidden flex-col items-center gap-3 border-r border-silver-soft bg-white px-3 py-4 sm:flex">
            {SIDEBAR.map((Icon, index) => (
              <span
                key={index}
                className={`grid size-9 place-items-center rounded-lg ${
                  index === 0 ? 'bg-ink text-white' : 'text-muted'
                }`}
              >
                <Icon className="size-4" />
              </span>
            ))}
          </aside>

          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-display text-sm font-bold text-ink">Resumen de ventas</p>
              <p className="text-[11px] text-muted">Esta semana</p>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: 'Ventas', value: '$4.820' },
                { label: 'Pedidos', value: '136' },
                { label: 'Stock bajo', value: '4' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-silver-soft p-2.5 sm:p-3">
                  <p className="truncate text-[10px] text-muted sm:text-[11px]">{kpi.label}</p>
                  <p className="mt-0.5 font-display text-sm font-bold text-ink sm:text-base">{kpi.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-silver-soft p-3">
              <div className="flex h-24 items-end justify-between gap-1.5 sm:h-28 sm:gap-2.5">
                {BARS.map((height, index) => (
                  <div key={index} className="flex h-full flex-1 flex-col justify-end gap-1">
                    <div
                      className={`w-full rounded-t-md ${index === 5 ? 'bg-electric' : 'bg-electric/20'}`}
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-center text-[9px] text-muted">{DAYS[index]}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="mt-3 divide-y divide-silver-soft rounded-lg border border-silver-soft">
              {ORDERS.map((order) => (
                <li key={order.id} className="flex items-center gap-2 px-3 py-2 text-[11px] sm:text-xs">
                  <span className="font-semibold text-ink">{order.id}</span>
                  <span className="min-w-0 flex-1 truncate text-muted">{order.client}</span>
                  <span className="font-medium text-ink">{order.total}</span>
                  <span
                    className={`hidden rounded-full px-2 py-0.5 text-[10px] font-medium min-[420px]:inline ${
                      order.status === 'Pagado' ? 'bg-wa/15 text-[#0f7a3a]' : 'bg-electric-soft text-electric'
                    }`}
                  >
                    {order.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tarjetas flotantes */}
      <div className="absolute -top-8 right-2 flex sm:-top-4 items-center gap-2.5 rounded-xl border border-silver-soft bg-white px-3.5 py-2.5 shadow-lift sm:-right-4">
        <CheckCircle2 className="size-5 text-electric" />
        <div className="leading-tight">
          <p className="text-xs font-semibold text-ink">Prototipo listo</p>
          <p className="text-[11px] text-muted">Entregado en 48 h</p>
        </div>
      </div>

      <div className="absolute -bottom-5 left-3 flex items-center gap-2.5 rounded-xl border border-silver-soft bg-white px-3.5 py-2.5 shadow-lift sm:-left-6">
        <span className="grid size-8 place-items-center rounded-full bg-wa text-ink">
          <WhatsAppIcon className="size-4" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-ink">Nuevo pedido #1043</p>
          <p className="text-[11px] text-muted">Recibido por WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

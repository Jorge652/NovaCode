import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export type LegalDoc = 'privacy' | 'terms';

const CONTENT: Record<LegalDoc, { title: string; sections: { heading: string; body: string }[] }> = {
  privacy: {
    title: 'Política de Privacidad',
    sections: [
      {
        heading: 'Datos que recibimos',
        body: 'Este sitio no utiliza formularios ni cookies de seguimiento. Solo recibimos la información que tú decides enviarnos al escribirnos por WhatsApp (nombre, número y detalles de tu proyecto).',
      },
      {
        heading: 'Uso de la información',
        body: 'Usamos tus datos exclusivamente para responder tu consulta, preparar cotizaciones y dar seguimiento a tu proyecto. No vendemos ni compartimos tu información con terceros.',
      },
      {
        heading: 'Confidencialidad',
        body: 'Las ideas, documentos y código de cada proyecto se tratan con total confidencialidad, en línea con la Ley Orgánica de Protección de Datos Personales del Ecuador.',
      },
      {
        heading: 'Tus derechos',
        body: 'Puedes solicitar en cualquier momento el acceso, la corrección o la eliminación de tus datos escribiéndonos por WhatsApp.',
      },
    ],
  },
  terms: {
    title: 'Términos y Condiciones',
    sections: [
      {
        heading: 'Cotizaciones',
        body: 'Toda cotización es personalizada y detalla alcance, tiempos y precio. Los tiempos de entrega indicados en el sitio son referenciales y se confirman por escrito en cada propuesta.',
      },
      {
        heading: 'Pagos y entregas',
        body: 'Las condiciones de pago y los hitos de entrega se acuerdan con cada cliente antes de iniciar el desarrollo. No existen mensualidades ocultas: cualquier costo recurrente (hosting, dominios) se informa de antemano.',
      },
      {
        heading: 'Propiedad del software',
        body: 'Una vez cancelado el valor acordado, el cliente recibe el código fuente y los derechos de uso del software desarrollado a medida.',
      },
      {
        heading: 'Proyectos académicos',
        body: 'El apoyo académico se ofrece como asesoría y desarrollo técnico. El estudiante es responsable del uso que haga del material conforme a las normas de su institución.',
      },
    ],
  },
};

type Props = { doc: LegalDoc | null; onClose: () => void };

export function LegalDialog({ doc, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (doc && !dialog.open) dialog.showModal();
    if (!doc && dialog.open) dialog.close();
  }, [doc]);

  const content = doc ? CONTENT[doc] : null;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      aria-labelledby="legal-title"
      className="m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl border border-silver-soft bg-white p-0 text-ink shadow-mockup"
    >
      {content && (
        <div className="flex max-h-[85dvh] flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-silver-soft px-6 py-4">
            <h2 id="legal-title" className="font-display text-xl font-bold">
              {content.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="grid size-10 place-items-center rounded-lg text-muted transition-colors hover:bg-mist hover:text-ink"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="space-y-5 overflow-y-auto px-6 py-6">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h3 className="font-semibold text-ink">{section.heading}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{section.body}</p>
              </section>
            ))}
            <p className="text-sm text-muted">Última actualización: 2026.</p>
          </div>
        </div>
      )}
    </dialog>
  );
}

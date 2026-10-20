// Configuración central del sitio: contacto, mensajes predeterminados y redes.

export const WHATSAPP_NUMBER = '593967138051';
export const WHATSAPP_DISPLAY = '+593 96 713 8051';

export const WA_MESSAGES = {
  business: 'Hola NovaCode, quisiera cotizar un desarrollo de software/web para mi negocio.',
  academic: 'Hola NovaCode, necesito ayuda y asesoria para un proyecto universitario.',
  developer: 'Hola NovaCode, quisiera hablar con un desarrollador sobre mi proyecto.',
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(serviceName: string): string {
  return `Hola NovaCode, quisiera cotizar el servicio de ${serviceName} para mi negocio.`;
}

export const NAV_LINKS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'ventajas', label: 'Ventajas' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'universitarios', label: 'Proyectos Universitarios' },
] as const;

/** Redes sociales: solo se muestran las que tengan URL. */
export const SOCIAL_LINKS: { label: 'Facebook' | 'Instagram' | 'LinkedIn' | 'TikTok'; href: string }[] = [
  { label: 'Facebook', href: '' },
  { label: 'Instagram', href: '' },
  { label: 'LinkedIn', href: '' },
  { label: 'TikTok', href: '' },
];

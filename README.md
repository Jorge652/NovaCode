# NovaCode — Landing Page

Landing de conversión directa por WhatsApp para **NovaCode** (desarrollo de software en Ecuador).

Sitio publicado: <https://jorge652.github.io/NovaCode/>

## Stack

- React 19 + TypeScript + Vite 6
- Tailwind CSS 4 (tokens de marca en `src/index.css`, bloque `@theme`)
- Fuentes autoalojadas: Inter (texto) y Manrope (titulares) vía Fontsource
- Iconos: lucide-react (+ icono propio de WhatsApp)
- Producción: GitHub Pages, o Nginx sin privilegios en Docker con CSP estricta

## Despliegue en GitHub Pages

Cada push a `main` ejecuta `.github/workflows/deploy-pages.yml`: instala dependencias,
verifica tipos, compila y publica el sitio. También puede lanzarse a mano desde la pestaña
**Actions** (_Run workflow_).

Configuración inicial (una sola vez) en el repositorio:

1. **Settings → Pages → Build and deployment → Source:** `GitHub Actions`.
2. El repositorio debe ser público (o tener un plan que permita Pages privado).

La ruta base se calcula sola: `/NovaCode/` en github.io y `/` con dominio propio.
Para usar un dominio propio, configurarlo en **Settings → Pages → Custom domain** y crear el
registro DNS (`CNAME` hacia `jorge652.github.io`).

GitHub Pages no permite cabeceras HTTP propias: la política CSP se inyecta como `<meta>` en
el build. `X-Frame-Options` y el resto de cabeceras solo aplican en el despliegue con Docker.

## Despliegue con Docker

No hace falta Node instalado: la compilación ocurre dentro de la imagen.

```bash
docker compose up -d --build
```

Sitio: <http://localhost:8095> · Healthcheck: `/healthz`

Para cambiar el puerto: `LANDING_PORT=8080 docker compose up -d --build`.

El contenedor corre con sistema de archivos de solo lectura, sin capacidades
(`cap_drop: ALL`) y `no-new-privileges`. En un servidor, colocar delante un proxy con TLS
(Caddy, Traefik, Nginx) que agregue HTTPS y HSTS.

## Configuración

Todo lo editable está en `src/config/site.ts`:

| Constante         | Uso                                                          |
| ----------------- | ------------------------------------------------------------ |
| `WHATSAPP_NUMBER` | Número en formato internacional sin `+` (`593967138051`)     |
| `WA_MESSAGES`     | Mensajes predeterminados (empresa, académico, desarrollador) |
| `SOCIAL_LINKS`    | Redes sociales; solo se muestran las que tengan URL          |

Cada tarjeta de servicio abre WhatsApp con un mensaje específico de ese servicio.

## Estructura

```
src/
  config/site.ts        contacto, mensajes y navegación
  components/           secciones (Navbar, Hero, Pillars, Services, Process,
                        Projects, Academic, FinalCta, Footer, LegalDialog…)
  components/ui/        Button, Logo, SectionHeading, iconos
  hooks/                useReveal (aparición al hacer scroll), useScroll
```

## Responsive

Mobile-first, verificado en 375 px (móvil), 768 px (tablet), 1024 px y 1440 px (escritorio).
Respeta `prefers-reduced-motion`.

## Desarrollo local (opcional, requiere Node 22)

```bash
npm install
npm run dev
```

# ENDOTEC Landing Page

Sitio web corporativo para ENDOTEC, especializado en equipamiento médico y servicio técnico.

## Requisitos Técnicos
- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS 4**
- **Lucide React** (iconos)

## Instalación y Ejecución Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Correr en modo desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Deploy en Vercel

Para desplegar en Vercel:

1. Subí este código a un repositorio de GitHub/GitLab/Bitbucket.
2. Importá el proyecto en el dashboard de [Vercel](https://vercel.com).
3. Vercel detectará automáticamente Next.js y realizará el build.
4. Las variables de entorno no son necesarias para esta versión estática.

## Notas de Desarrollo
- Las imágenes utilizan placeholders de Unsplash vía `next/image`. Para producción, reemplazarlas por archivos reales en la carpeta `/public` o en un CDN propio.
- El botón de WhatsApp está configurado con un número placeholder (+54 9 11 0000-0000). Cambiarlo en `components/WhatsAppButton.tsx`.
- Los links de navegación utilizan anclas (`#`) que scrollean suavemente a las secciones correspondientes.

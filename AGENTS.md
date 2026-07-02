# MG Mantenimientos — Contexto del proyecto

Web estática en Astro + Tailwind para MG Mantenimientos (desatascos y control de plagas, Sevilla). Desplegada en Netlify.

## Stack

- Astro (SSG) + Tailwind CSS v4 (vía `@tailwindcss/vite`)
- `@astrojs/sitemap` para `sitemap.xml`
- Fuentes autoalojadas: `@fontsource-variable/sora` (titulares) y `@fontsource-variable/manrope` (cuerpo)
- Formulario de contacto: Netlify Forms (`src/components/ContactForm.astro`, `data-netlify="true"`)
- Blog: Astro Content Collections, definidas en `src/content.config.ts`, contenido en `src/content/blog/*.md`
- Gestor de paquetes: `pnpm`

## Datos clave

- NAP: Av. Juan XXIII, Local 18, 41006 Sevilla / 687 339 707 (desatascos) / 619 640 558 (plagas)
- Horario: 24h, 365 días
- Rating real: 4.6★ (61 reseñas en Google, verificado julio 2026)
- Todos los datos de negocio centralizados en `src/data/site.ts` — cualquier cambio de NAP, teléfonos o servicios se hace ahí, no en las páginas.

## Diseño

- Colores: `#C8161D` (rojo de marca, primario y acento), `#1B1B1B` (oscuro para footer/CTAs), `#25D366` (WhatsApp), `#F7F8FA` (fondo), `#1E1E1E` (texto) — definidos en `src/styles/global.css` vía `@theme`. El cliente usa el rojo como color de marca (julio 2026, antes era paleta azul/naranja).
- Logo: `public/logo.png` es el **logo real** (variante "MG MANTENIMIENTOS SL") descargado de su web anterior en Wix (mgmantenimientos.com), redimensionado a 480px. Originales a resolución completa: `src/assets/logo-sl-original.png` (variante SL, la usada) y `src/assets/logo-original.png` (variante "Mantenimientos Generales" con tagline).
- Fotos reales en `src/assets/fotos/` (descargadas de su web Wix, julio 2026, incluyendo las de los lightboxes vía los page JSON de `siteassets.parastorage.com`): técnico en arqueta, técnico fumigando, trampa de cucarachas, nebulizador de desinfección (sin usar aún), furgoneta rotulada, flota, cámara 360º y pistola de presión (maquinaria), y fumigación de stock con logo MG (sin usar, sustituida por fotos reales).
- Tipografías: Sora (titulares) / Manrope (cuerpo).
- Iconografía propia en SVG (`src/components/icons/Icon.astro`), sin fotos de stock — a la espera de fotos reales del cliente.

## WhatsApp

- CTAs de WhatsApp con dos contactos (en `src/data/site.ts`): Manuel Vazquez (Desatascos 24H, 687 339 707) y Angel Baena (Control de Plagas, 619 640 558). La rotulación de la furgoneta (foto en `src/assets/fotos/`) muestra icono de WhatsApp junto a ambos números, lo que confirma que ambas líneas tienen WhatsApp.
- Widget flotante (`src/components/WhatsAppWidget.astro`) en todas las páginas, replica el de su web anterior.

## Opiniones

- No hay página `/opiniones/`: las reseñas viven en la homepage (`#opiniones`) con scroll lateral (snap). Los textos son reseñas reales de Google (en `src/data/site.ts`, `resenas`), con ortografía ligeramente normalizada — confirmar selección con el cliente.

## Pendiente de confirmar con el cliente

- CIF/NIF para Aviso Legal (placeholder `[CIF_PENDIENTE]` en `src/data/site.ts` y en `/aviso-legal/`)
- URL exacta de Facebook (placeholder en `src/data/site.ts`)
- Dominio real del sitio (actualmente `https://www.mgmantenimientos.es` como placeholder en `astro.config.mjs`, usado también en el sitemap y JSON-LD)
- Fotos reales del equipo/trabajos, para sustituir los iconos SVG (pedidas al cliente en julio 2026; guardarlas en `src/assets/fotos/` cuando lleguen)
- Emails publicados (`mgmantenimientos2013@gmail.com` desatascos, `plagas.mgmantenimientos@gmail.com` plagas), tomados de la rotulación de la furgoneta — confirmar con el cliente que siguen activos
- Tercer teléfono de fontanería (`607 453 858`, visto en la camiseta del equipo) no publicado — confirmar si ofrecen fontanería como servicio
- Nº ROESBA de la autorización de la Junta: en la furgoneta se lee parcialmente `1255-AND-850…` (oculto por la manilla de la puerta) — pedir el número completo al cliente; es un dato de confianza muy bueno para publicar en la landing de plagas y el JSON-LD
- Migración del contenido real del blog anterior en Wix: los 3 posts actuales son contenido nuevo escrito para este proyecto, no una migración — si el cliente quiere conservar URLs/contenido indexado del blog antiguo, hace falta que aporte el export o acceso a la web en Wix

## Notas

Contenido base extraído del prompt de especificación del proyecto (datos de negocio y ficha de Google Maps del negocio, julio 2026). Copy reescrito para SEO, no copiado literal.

El `netlify.toml` original propuesto en la especificación incluía una regla de redirect (`/* → /404`) que habría redirigido todo el sitio a un 404; se omitió deliberadamente por ser un error evidente.

Antes de publicar: validar el JSON-LD (`src/components/JsonLd.astro`) con la Rich Results Test de Google.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

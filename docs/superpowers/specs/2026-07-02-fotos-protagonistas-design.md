# Fotos reales protagonistas en la web — Diseño

**Fecha:** 2026-07-02 · **Estado:** aprobado por Nuria

## Contexto

Al cliente le gustan mucho las fotos. La portada actual no tiene ninguna
(hero de degradado + iconos SVG); las 9 fotos reales de `src/assets/fotos/`
solo aparecen en páginas interiores y una (el nebulizador) no se usa.

**Regla de coherencia:** cada foto va junto al contenido que demuestra.
Nada de fotos decorativas ni repetidas dentro de una misma página.

## Diseño

1. **Hero partido en portada.** `Hero.astro` gana props opcionales
   `image`/`imageAlt` (tipo `ImageMetadata`). Con imagen: grid de dos
   columnas en desktop (texto + CTAs izquierda, foto enmarcada derecha),
   foto bajo el texto en móvil. Sin imagen: hero actual intacto.
   La portada pasa la **furgoneta rotulada**
   (`furgoneta-desatascos-control-plagas-sevilla.jpg`): muestra ambos
   servicios, teléfonos, 24h y autorización de la Junta. Carga prioritaria
   (`loading="eager"`) por ser LCP.

2. **Cabecera de foto en `ServiceCard.astro`.** Props opcionales
   `image`/`imageAlt`; la foto va arriba de la tarjeta y el icono queda
   como distintivo pequeño. Fotos: técnico en arqueta (Desatascos) y
   técnico fumigando (Control de Plagas). Afecta a portada y `/servicios/`
   (mismo componente).

3. **Nebulizador en la landing de plagas.** La foto sin usar
   (`desinfeccion-nebulizador-sevilla.jpg`) se añade en
   `/control-plagas-sevilla/` junto al contenido de desinfección.

4. **Técnica.** `astro:assets` (`<Image>`) en todo, `alt` descriptivos con
   SEO local ("… en Sevilla"), sin tocar reseñas ni CTAs de urgencia.

## Resultado esperado

Portada: de 0 a 3 fotos visibles nada más entrar. Todas las fotos reales
del cliente colocadas con sentido. Sin regresiones de LCP notables
(hero eager + resto lazy).

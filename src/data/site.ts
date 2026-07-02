export const site = {
  nombre: 'MG Mantenimientos Desatascos y Control de Plagas, S.L.',
  nombreCorto: 'MG Mantenimientos',
  categorias: ['Desatascos y saneamiento', 'Control de plagas'],
  direccion: {
    calle: 'Av. Juan XXIII, Local 18',
    cp: '41006',
    ciudad: 'Sevilla',
    provincia: 'Sevilla',
    pais: 'ES',
    completa: 'Av. Juan XXIII, Local 18, 41006 Sevilla',
  },
  telefonos: {
    desatascos: '687 339 707',
    desatascosTel: '687339707',
    plagas: '619 640 558',
    plagasTel: '619640558',
  },
  // Emails vistos en la rotulación de las furgonetas (web anterior) — confirmar con el cliente
  emails: {
    desatascos: 'mgmantenimientos2013@gmail.com',
    plagas: 'plagas.mgmantenimientos@gmail.com',
  },
  // WhatsApp: la rotulación de la furgoneta muestra icono de WhatsApp en ambos números
  whatsapp: {
    desatascos: {
      nombre: 'Manuel Vazquez',
      rol: 'Desatascos 24H',
      numero: '34687339707',
    },
    plagas: {
      nombre: 'Angel Baena',
      rol: 'Control de Plagas',
      numero: '34619640558',
    },
  },
  horario: 'Abierto 24 horas, los 365 días del año',
  zonaServicio: 'Sevilla capital',
  valoracionGoogle: { rating: 4.6, numReviews: 61 },
  coordenadas: { lat: 37.3772014, lng: -5.9504409 },
  googleMapsUrl:
    'https://www.google.com/maps/place/?q=place_id:ChIJmTPs3OVuEg0RB4gZD6yQusU',
  redesSociales: {
    facebook: 'https://facebook.com/MgManGen', // TODO: verificar URL exacta con el cliente antes de publicar
    twitter: 'https://twitter.com/MgManGen',
  },
  cifPendiente: '[CIF_PENDIENTE]',
  diferenciadores: [
    'Más de 25 años de experiencia',
    'Empresa autorizada por la Junta de Andalucía para tratamientos de control de plagas',
    'Servicio de urgencias 24h, los 365 días',
    'Inspección y grabación con cámara 360º para localizar averías sin obra',
    'Garantía de precio: igualan o bajan cualquier presupuesto',
  ],
  // Reseñas reales de Google (ortografía ligeramente normalizada, textos truncados
  // por Google recortados en frase completa) — confirmar selección con el cliente
  resenas: [
    {
      autor: 'Patricia Garrido Jiménez',
      texto:
        'He tenido un atasco en el fregadero y gestionaron la visita de un día para otro y el servicio genial. Se trataba de un gran atasco y ha quedado solucionado súper rápido. Muy agradecida por su atención y profesionalidad. ¡Recomendadísimos!',
    },
    {
      autor: 'María Jose Daza',
      texto:
        'Son los mejores. En Semana Santa con la lluvia se desbordó la arqueta, vinieron rápidamente, desatascaron y está de lujo, así que hemos decidido los cuatro vecinos que nos lleven el mantenimiento.',
    },
    {
      autor: 'Álvaro Vallejo Mijes',
      texto:
        'Me hicieron el trabajo de cucarachas en mi casa, me dijeron que en dos visitas estaría ejecutado su trabajo. No solo me las han quitado, sino que no han vuelto a aparecer más.',
    },
    {
      autor: 'Sara Iglesias Daza',
      texto:
        'Los llamé para la fumigación de mi casa de campo, son súper eficaces, rápidos y profesionales. Volveré a llamarlos sin duda. Muy recomendable. Encantada 100%.',
    },
    {
      autor: 'Carlos López Olmedo',
      texto:
        'Muy buena atención y profesionalidad. Me limpiaron la arqueta y fumigaron y me han solucionado el problema que tenía. Sin duda los recomiendo y volveré a llamarlos.',
    },
    {
      autor: 'Agripina Daza',
      texto:
        'Vinieron e hicieron todo el trabajo fenomenal y súper limpios. Saben lo que hacen, ya que vinieron varias empresas de desatascos y ninguna dio con el problema.',
    },
    {
      autor: 'Coral Pérez Mora',
      texto:
        'Acabaron con las plagas que tenía en mi patio, servicio de 10, no dudo en recomendarlos siempre. Me los recomendó una amiga y 100% volvería a contar con ellos.',
    },
    {
      autor: 'Juan Antonio Ríos García',
      texto:
        'Magníficos profesionales. Hoy en Carmona, en un atoramiento supercomplicado lo han demostrado. Enhorabuena, muchachos.',
    },
    {
      autor: 'Isabel M Conde Serrano',
      texto:
        'Muy profesionales, rápidos y buen precio. Abonada a su servicio de mantenimiento y control de plagas, recomiendo 100%.',
    },
    {
      autor: 'Amparo Some Vazquez',
      texto:
        'Súper contenta con el servicio de control de plagas y desatascos en las arquetas de mi casa. Sin duda un gran equipo de profesionales.',
    },
    {
      autor: 'Andrés Sánchez Vázquez',
      texto:
        'Impresionante la forma de trabajar. Encantado con todo su trabajo. Si me vuelve a pasar, me pondría de nuevo en contacto con ellos. Muchas gracias.',
    },
    {
      autor: 'Alonso P.M.',
      texto:
        'Muy buenos profesionales, siempre te dan una solución viable y unos precios muy competitivos. Lo mejor, la gran plantilla y su buena dirección.',
    },
  ],
  servicios: {
    desatascos: [
      'Desatascos urgentes 24h',
      'Limpieza y desatasco de alcantarillado',
      'Inspección con cámara de TV 360º',
      'Localización de arquetas ocultas',
      'Desatasco de tuberías de pequeño diámetro',
      'Achique de agua',
      'Mantenimiento anual de desatascos',
    ],
    plagas: [
      'Desinsectación',
      'Desratización',
      'Desinfección',
      'Tratamiento contra termitas',
      'Mantenimiento anual de control de plagas',
    ],
  },
} as const;

export type Site = typeof site;

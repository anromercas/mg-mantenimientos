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

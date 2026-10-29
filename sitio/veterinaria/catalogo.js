window.TRAINING_ROLES = [
  { key: 'recepcion', label: 'Recepción' },
  { key: 'veterinaria', label: 'Equipo veterinario' },
  { key: 'caja', label: 'Caja y administración' }
];

window.TRAINING_VIDEOS = [
  {
    number: 1,
    title: 'Tutores y mascotas',
    audience: ['recepcion'],
    audienceLabel: 'Recepción veterinaria',
    minutes: 1,
    requires: [],
    status: 'disponible',
    file: '01-tutores-y-mascotas.mp4',
    subtitles: '01-tutores-y-mascotas.vtt',
    summary: 'Prepare la ficha del tutor, sus mascotas y el historial sin duplicar datos.',
    covers: ['Buscar primero al tutor', 'Registrar o consultar la mascota', 'Abrir el historial cronológico']
  },
  {
    number: 2,
    title: 'Agenda, consulta y preventivos',
    audience: ['veterinaria'],
    audienceLabel: 'Equipo veterinario',
    minutes: 1,
    requires: [1],
    status: 'disponible',
    file: '02-agenda-consulta-y-preventivos.mp4',
    subtitles: '02-agenda-consulta-y-preventivos.vtt',
    summary: 'Registre la atención y aplique preventivos con el lote y la próxima fecha trazables.',
    covers: ['Agenda tutor–mascota', 'Consulta y receta', 'Vacuna o antiparasitario con lote, dosis y próxima fecha']
  },
  {
    number: 3,
    title: 'Factura y comprobante electrónico',
    audience: ['caja'],
    audienceLabel: 'Caja y administración',
    minutes: 1,
    requires: [1, 2],
    status: 'disponible',
    file: '03-factura-y-documento-electronico.mp4',
    subtitles: '03-factura-y-documento-electronico.vtt',
    summary: 'Facture desde la mascota y consulte o descargue el comprobante electrónico.',
    covers: ['Tutor propuesto como pagador', 'Factura vinculada al historial', 'RIDE, XML firmado y autorización']
  }
];

window.TRAINING_LEGACY = [];

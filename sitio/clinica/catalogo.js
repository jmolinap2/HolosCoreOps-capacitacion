// Catálogo único de la serie de capacitación clínica. index.html lo lee para dibujar la página.
// status: "disponible" (el MP4 existe y cumple el formato aprobado) o "preparacion" (aún no se graba).
// Al publicar un video: crear el MP4 (y su .vtt) con el nombre de "file", poner status "disponible" y minutes con la duración real.
window.TRAINING_ROLES = [
  { key: "administracion", label: "Administración" },
  { key: "recepcion", label: "Recepción" },
  { key: "medico", label: "Médico" },
  { key: "cirugia", label: "Cirugía" },
  { key: "caja", label: "Caja y contabilidad" }
];

window.TRAINING_VIDEOS = [
  {
    number: 1,
    title: "Acceso y equipo clínico",
    audience: ["administracion"],
    audienceLabel: "Administración",
    minutes: 4,
    requires: [],
    summary: "Deja listo al equipo: quién entra al sistema, con qué permisos y qué profesionales atienden.",
    covers: [
      "Elegir tenant e iniciar sesión",
      "Crear un rol y elegir sus permisos",
      "Crear usuario, asignar compañías y restablecer contraseña",
      "Crear especialidades",
      "Registrar profesionales con firma y sello"
    ],
    file: "01-acceso-y-equipo-clinico.mp4",
    subtitles: "01-acceso-y-equipo-clinico.vtt",
    status: "disponible"
  },
  {
    number: 2,
    title: "Pacientes y citas",
    audience: ["recepcion"],
    audienceLabel: "Recepción",
    minutes: 4,
    requires: [1],
    summary: "El trabajo diario de recepción: registrar al paciente y organizar la agenda.",
    covers: [
      "Crear, buscar y editar un paciente",
      "Abrir su expediente",
      "Crear una cita y verla en la agenda o en la lista",
      "Reprogramar, cancelar y completar una cita"
    ],
    file: "02-pacientes-y-citas.mp4",
    subtitles: "02-pacientes-y-citas.vtt",
    status: "disponible"
  },
  {
    number: 3,
    title: "Consulta y expediente",
    audience: ["medico"],
    audienceLabel: "Médico",
    minutes: 5,
    requires: [1, 2],
    summary: "De la cita a un expediente cerrado, y qué hacer cuando hay que corregirlo.",
    covers: [
      "Abrir la consulta desde una cita o crearla de forma directa",
      "Registrar peso, talla, IMC y antecedentes",
      "Cambiar el estado de la consulta en el seguimiento",
      "Crear un documento clínico, guardarlo como borrador y editarlo",
      "Cerrar, auditar y corregir con una enmienda",
      "Exportar un documento o el expediente completo"
    ],
    file: "03-consulta-y-expediente.mp4",
    subtitles: "03-consulta-y-expediente.vtt",
    status: "disponible"
  },
  {
    number: 4,
    title: "Formularios y medicación",
    audience: ["medico"],
    audienceLabel: "Médico y farmacia",
    minutes: 5,
    requires: [3],
    summary: "Los documentos clínicos de la atención y el recorrido de un medicamento hasta el paciente.",
    covers: [
      "Elegir y completar los formularios clínicos, incluido el 008",
      "Pedir un consentimiento y adjuntar la evidencia de la firma",
      "Indicar un medicamento",
      "Dispensar y revertir una entrega"
    ],
    file: "04-formularios-y-medicacion.mp4",
    subtitles: "04-formularios-y-medicacion.vtt",
    status: "disponible"
  },
  {
    number: 5,
    title: "Cirugía: de la cotización al caso",
    audience: ["cirugia"],
    audienceLabel: "Cirugía",
    minutes: 3,
    requires: [1, 2],
    summary: "Cómo se prepara una cirugía ambulatoria antes de entrar a quirófano.",
    covers: [
      "Crear la cotización y emitirla",
      "Aceptar el contrato y registrar el anticipo",
      "Crear el caso quirúrgico desde el contrato",
      "Programar el quirófano: sala, fecha y horario"
    ],
    file: "05-cirugia-de-la-cotizacion-al-caso.mp4",
    subtitles: "05-cirugia-de-la-cotizacion-al-caso.vtt",
    status: "disponible"
  },
  {
    number: 6,
    title: "Insumos y honorarios",
    audience: ["cirugia"],
    audienceLabel: "Cirugía y bodega",
    minutes: 4,
    requires: [5],
    summary: "Qué se usa en la cirugía, qué se cobra aparte y cuánto recibe cada profesional.",
    covers: [
      "Definir la receta de insumos",
      "Solicitar, recibir y consumir insumos",
      "Registrar devoluciones",
      "Resolver cargos adicionales",
      "Revisar y aprobar los honorarios"
    ],
    file: "06-insumos-y-honorarios.mp4",
    subtitles: "06-insumos-y-honorarios.vtt",
    status: "disponible"
  },
  {
    number: 7,
    title: "Cobros, cartera y contabilidad",
    audience: ["caja"],
    audienceLabel: "Caja y contabilidad",
    minutes: 3,
    requires: [5, 6],
    summary: "Cómo se cobra lo atendido y dónde queda el rastro contable.",
    covers: [
      "Ver la cuenta del caso y buscar la factura del contrato",
      "Registrar un pago parcial y el pago final",
      "Revisar la cartera y su antigüedad en Cuentas por cobrar",
      "Consultar el asiento contable de cada cobro",
      "Qué revisar en los períodos fiscales antes del cierre"
    ],
    file: "07-cobros-cartera-y-contabilidad.mp4",
    subtitles: "07-cobros-cartera-y-contabilidad.vtt",
    status: "disponible"
  }
];

// La serie publicada contiene únicamente los recorridos aprobados de voz B.
window.TRAINING_LEGACY = [];

window.TRAINING_ROLES = [
  { key: 'ventas', label: 'Ventas y facturación' },
  { key: 'compras', label: 'Compras y pagos' },
  { key: 'caja', label: 'Caja y cartera' },
  { key: 'contabilidad', label: 'Contabilidad' }
];

window.TRAINING_VIDEOS = [
  { number: 1, title: 'Ventas y facturación electrónica', audience: ['ventas'], audienceLabel: 'Ventas', minutes: 2, requires: [], status: 'disponible', file: '01-ventas-y-facturacion-electronica.mp4', subtitles: '01-ventas-y-facturacion-electronica.vtt', summary: 'Del cliente y pedido hasta la factura, el cobro y el comprobante electrónico.', covers: ['Clientes y pedidos', 'Factura y pagos', 'Notas de crédito y débito', 'Documento electrónico e importación XML'] },
  { number: 2, title: 'Compras y pagos a proveedores', audience: ['compras'], audienceLabel: 'Compras', minutes: 1, requires: [], status: 'disponible', file: '02-compras-y-pagos.mp4', subtitles: '02-compras-y-pagos.vtt', summary: 'Proveedor, orden, recepción, factura, retención y pago.', covers: ['Proveedor y orden de compra', 'Recepción parcial o total', 'Factura de proveedor', 'Retención y cuentas por pagar'] },
  { number: 3, title: 'Cobros, cartera y gestión de caja', audience: ['caja'], audienceLabel: 'Caja y cartera', minutes: 1, requires: [1], status: 'disponible', file: '03-cobros-cartera-y-caja.mp4', subtitles: '03-cobros-cartera-y-caja.vtt', summary: 'Cómo cobrar, controlar saldos y realizar el arqueo de caja.', covers: ['Cuentas por cobrar', 'Cobro y referencia', 'Antigüedad de cartera', 'Sesión, movimientos y arqueo'] },
  { number: 4, title: 'Contabilidad operativa y cierre', audience: ['contabilidad'], audienceLabel: 'Contabilidad', minutes: 1, requires: [1, 2, 3], status: 'disponible', file: '04-contabilidad-operativa-y-cierre.mp4', subtitles: '04-contabilidad-operativa-y-cierre.vtt', summary: 'Plan de cuentas, períodos, asientos, conciliación y reportes.', covers: ['Plan de cuentas', 'Períodos fiscales', 'Asientos automáticos', 'Conciliación y reportes'] },
  { number: 5, title: 'Conciliación de movimientos', audience: ['contabilidad'], audienceLabel: 'Contabilidad', minutes: 1, requires: [4], status: 'disponible', file: '05-conciliacion-contable.mp4', subtitles: '05-conciliacion-contable.vtt', summary: 'Busca un asiento, relaciona la línea y aprueba la conciliación.', covers: ['Buscar el asiento', 'Identificar cuenta y línea', 'Registrar y aprobar la conciliación', 'Evitar duplicados'] }
];

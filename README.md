# HolosCoreOps: capacitación en video

Un solo sitio estático con todas las series de capacitación de HolosCoreOps. La carpeta `sitio/` es lo que se publica.

```
sitio/
├── index.html        Inicio: una tarjeta por serie
├── _headers          No indexar, caché de los videos
├── robots.txt
├── clinica/          Capacitación clínica (7 videos)
└── financiera/       Capacitación financiera (4 videos)
```

Cada serie es una carpeta con su propia página (`index.html` + `catalogo.js`), sus MP4 y sus subtítulos. Una serie nueva
(otro giro de negocio) es una carpeta más: aparece sola en el inicio.

La aplicación enlaza a cada serie desde `angular/src/assets/appconfig*.json` (clave `helpLinks`), con el formato
`<sitio>/<serie>/#video-N`. Si cambia el nombre del sitio, hay que cambiar esa dirección en la aplicación.

## Configuración en Netlify

Un único sitio conectado a este repositorio:

- **Nombre del sitio:** `holoscoreops-capacitacion` (`https://holoscoreops-capacitacion.netlify.app`)
- **Branch to deploy:** `main`
- **Base directory:** vacío
- **Build command:** vacío
- **Publish directory:** `sitio`
- **Functions directory:** vacío

## Cómo se actualizan los videos

La carpeta `sitio/` se **genera**: no se editan sus archivos a mano. El origen de los videos, los subtítulos y los
catálogos está en el repositorio principal `HolosCoreOps` (`docs/manuales/videos/`). Desde la raíz de ese repositorio:

```powershell
node scripts/prepare-training-site.mjs --todas --salida ..\HolosCoreOps-capacitacion\sitio
```

El script copia solo lo que cada catálogo marca como disponible, reemplaza las carpetas de las series y regenera el
inicio, `_headers` y `robots.txt`. Después, aquí:

```powershell
git status          # revisar qué videos cambiaron
git add -A
git commit -m "Actualiza videos de <serie>"
git push
```

Netlify publica solo al recibir el push.

Los MP4 son archivos binarios: cada versión nueva queda guardada en el historial para siempre. Conviene regrabar
y hacer commit solo cuando el video realmente cambió.

## Privacidad

El sitio lleva `X-Robots-Tag: noindex` y `robots.txt` con `Disallow: /`, pero **no tiene contraseña**: cualquiera con
la dirección puede verlo. Los videos muestran datos de demostración; revisar que sigan siéndolo antes de publicar.
Este repositorio debe ser **privado**.

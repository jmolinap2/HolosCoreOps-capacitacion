# HolosCoreOps: capacitación en video

Sitios estáticos con los videos de capacitación de HolosCoreOps. Cada carpeta es un sitio de Netlify independiente.

| Carpeta | Serie | Videos | Sitio de Netlify |
|---|---|---|---|
| `clinica/` | Capacitación clínica | 7 | `holoscoreops-capacitacion-clinica` |
| `financiera/` | Capacitación financiera | 4 | `holoscoreops-capacitacion-financiera` |

La aplicación enlaza a estos sitios desde `angular/src/assets/appconfig*.json` (clave `helpLinks`), con el formato
`<sitio>/#video-N`. Si cambia el nombre de un sitio, hay que cambiar esa dirección en la aplicación.

## Configuración en Netlify

Dos sitios conectados a este mismo repositorio, cada uno con:

- **Branch to deploy:** `main`
- **Build command:** vacío
- **Publish directory:** `clinica` en uno y `financiera` en el otro (sin directorio base)

Cada commit despliega los dos sitios. Si molesta, en *Site configuration → Build & deploy → Build settings* se puede
poner un filtro para que cada sitio solo se despliegue cuando cambie su carpeta.

## Cómo se actualizan los videos

Esta carpeta se **genera**: no se editan los archivos a mano. El origen de los videos, los subtítulos y los catálogos
está en el repositorio principal `HolosCoreOps` (`docs/manuales/videos/`). Desde la raíz de ese repositorio:

```powershell
node scripts/prepare-training-site.mjs --todas --salida ..\HolosCoreOps-capacitacion
```

El script copia solo lo que el catálogo marca como disponible, agrega `_headers` y `robots.txt` y reemplaza las carpetas
`clinica/` y `financiera/`. Después, aquí:

```powershell
git status          # revisar qué videos cambiaron
git add -A
git commit -m "Actualiza videos de <serie>"
git push
```

Los MP4 son archivos binarios: cada versión nueva queda guardada en el historial para siempre. Conviene regrabar
y hacer commit solo cuando el video realmente cambió.

## Privacidad

Los sitios llevan `X-Robots-Tag: noindex` y `robots.txt` con `Disallow: /`, pero **no tienen contraseña**: cualquiera con
la dirección puede verlos. Los videos muestran datos de demostración; revisar que sigan siéndolo antes de publicar.

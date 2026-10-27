# AppGimnacio

Aplicación web para gestionar el acceso y las inscripciones de un gimnasio. Permite iniciar sesión, registrar usuarios, consultar las inscripciones y eliminar registros. La información de los inscritos se almacena en `localStorage`.

## Requisitos

- Node.js `20.19` o superior.
- npm incluido con Node.js.

## Instalación y ejecución

```bash
npm ci
npm start
```

La aplicación estará disponible en `http://localhost:4200/`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo. |
| `npm run build` | Compila la aplicación para producción en `dist/`. |
| `npm test -- --watch=false` | Ejecuta las pruebas unitarias una vez con Karma y Chrome. |
| `npm audit` | Revisa vulnerabilidades conocidas en las dependencias. |

## Cambios técnicos documentados

- Actualización de Angular 18 a Angular 21 mediante las migraciones oficiales. Los componentes standalone y sus pruebas usan la configuración correspondiente.
- Configuración de Bootstrap desde `src/bootstrap.scss`, incluyendo los estilos utilizados por la aplicación para reducir el CSS inicial.
- Uso del punto de entrada ESM de SweetAlert2 para mejorar su compatibilidad con la optimización del build.
- Overrides de `undici` y `uuid` para utilizar versiones corregidas en dependencias indirectas. `chokidar` se declara para mantener compatible el lockfile con npm 10.
- Configuración de pruebas para importar componentes standalone y proporcionar el router donde es necesario.

## Verificaciones

Después de los cambios se verificó:

- `npm ci`: instalación limpia completada.
- `npm run build`: compilación correcta; bundle inicial de aproximadamente 492 kB, bajo el presupuesto de 500 kB.
- `npm test -- --watch=false`: 8 pruebas aprobadas.
- `npm audit`: 0 vulnerabilidades reportadas.

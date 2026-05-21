# Client

React 19 + TypeScript + Vite + HeroUI + Tailwind CSS v4

## Stack

- **React 19** con React Compiler habilitado
- **Vite 5** como bundler
- **HeroUI 3** como librería de componentes
- **Tailwind CSS 4** para utilidades de layout y espaciado
- **Zustand** para estado global
- **SWR + Axios** para data fetching
- **React Router 7** para navegación

## Tokens semánticos de HeroUI

HeroUI expone variables CSS que cambian automáticamente entre light y dark mode.
Siempre preferir estas clases sobre colores hardcodeados de Tailwind (`gray-*`, `white`, etc.).

### Colores de texto

| Clase Tailwind    | Variable       | Uso                                  |
| ----------------- | -------------- | ------------------------------------ |
| `text-foreground` | `--foreground` | Texto principal                      |
| `text-muted`      | `--muted`      | Texto secundario, labels, subtítulos |
| `text-link`       | `--link`       | Links                                |

### Fondos

| Clase Tailwind         | Variable              | Uso                                    |
| ---------------------- | --------------------- | -------------------------------------- |
| `bg-background`        | `--background`        | Fondo de la página                     |
| `bg-surface`           | `--surface`           | Fondo de cards y paneles               |
| `bg-surface-secondary` | `--surface-secondary` | Fondo de secciones secundarias         |
| `bg-surface-tertiary`  | `--surface-tertiary`  | Fondo de hover states o capas anidadas |
| `bg-field-background`  | `--field-background`  | Fondo de inputs y campos de formulario |
| `bg-overlay`           | `--overlay`           | Fondo de modals y drawers              |

### Bordes

| Clase Tailwind     | Variable      | Uso                    |
| ------------------ | ------------- | ---------------------- |
| `border-border`    | `--border`    | Bordes generales       |
| `border-separator` | `--separator` | Separadores y dividers |

### Colores de estado

| Clase Tailwind | Variable    | Uso               |
| -------------- | ----------- | ----------------- |
| `text-accent`  | `--accent`  | Acción principal  |
| `text-success` | `--success` | Éxito             |
| `text-warning` | `--warning` | Advertencia       |
| `text-danger`  | `--danger`  | Error / peligro   |
| `bg-accent`    | `--accent`  | Fondo acento      |
| `bg-success`   | `--success` | Fondo éxito       |
| `bg-warning`   | `--warning` | Fondo advertencia |
| `bg-danger`    | `--danger`  | Fondo error       |

### Utilidades propias de HeroUI

| Clase              | Uso                                                 |
| ------------------ | --------------------------------------------------- |
| `focus-ring`       | Ring de foco accesible (reemplaza `outline` manual) |
| `focus-field-ring` | Ring de foco para inputs                            |
| `status-disabled`  | Aplica opacidad y cursor deshabilitado              |
| `status-pending`   | Bloquea pointer events mientras carga               |

### Ejemplo

```tsx
// Evitar
<p className="text-gray-900 dark:text-white bg-white dark:bg-gray-900">

// Preferir
<p className="text-foreground bg-background">
```

## Convenciones

- Solo **arrow functions** (regla de ESLint activa)
- `const` siempre que no se reasigne
- Sin `var`
- Pre-commit corre ESLint + Prettier automáticamente vía Husky

## Comandos

```bash
npm run dev          # servidor de desarrollo
npm run build        # build de producción
npm run lint         # linter
npm run format       # formatear con Prettier
npm run format:check # verificar formato sin escribir
```

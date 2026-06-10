# Hero — Servidor (Mock API)

Mock REST API construida con **json-server** que simula el backend de la tienda Hero.

## Stack

- **json-server 0.17** — REST API automática sobre archivos JSON
- **nodemon** — reinicio automático en desarrollo

## Requisitos

- Node.js 18+

## Instalación y ejecución

```bash
cd server
npm install
npm run dev    # corre en http://localhost:3008
```

## Endpoints disponibles

La API REST sigue las convenciones de json-server. Todos los endpoints soportan `GET`, `POST`, `PUT`, `PATCH` y
`DELETE`.

### Productos

| Método  | Ruta            | Descripción                                 |
|---------|-----------------|---------------------------------------------|
| `GET`   | `/products`     | Lista todos los productos                   |
| `GET`   | `/products/:id` | Obtiene un producto por slug/id             |
| `PATCH` | `/products/:id` | Actualiza campos de un producto (ej: stock) |

**Parámetros de query soportados:**

- `category=remeras` — filtra por categoría
- `badge=capsula` — filtra por etiqueta
- `_sort=price&_order=asc` — ordena por precio

### Carrito

| Método  | Ruta        | Descripción                               |
|---------|-------------|-------------------------------------------|
| `GET`   | `/cart`     | Obtiene el carrito activo                 |
| `POST`  | `/cart`     | Crea un carrito                           |
| `PATCH` | `/cart/:id` | Actualiza el carrito (agrega/quita ítems) |

### Pedidos

| Método | Ruta                                 | Descripción             |
|--------|--------------------------------------|-------------------------|
| `GET`  | `/orders`                            | Lista todos los pedidos |
| `GET`  | `/orders?orderNumber=HR-2026-000001` | Busca pedido por número |
| `POST` | `/orders`                            | Crea un nuevo pedido    |

### Salud

| Método | Ruta      | Descripción                          |
|--------|-----------|--------------------------------------|
| `GET`  | `/health` | Verifica que el servidor esté activo |

## Archivos de datos

```
data/
├── products.json   # Catálogo de 15 productos
├── cart.json       # Estado del carrito
├── orders.json     # Pedidos realizados
└── users.json      # Usuarios (no utilizado actualmente)
```

> Los archivos JSON son modificados por json-server en tiempo real. Para resetear los datos, restaurar los archivos
> desde el repositorio.

## Puerto

Por defecto corre en el puerto `3008`. Se puede cambiar con la variable de entorno `PORT`:

```bash
PORT=4000 npm run dev
```

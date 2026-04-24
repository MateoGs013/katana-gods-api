# Katana Gods API

API REST sobre dioses sellados en katanas. Construida con Node.js, Express y MongoDB (Mongoose).

## Stack

- Node.js (ES Modules)
- Express
- Mongoose
- dotenv
- cors

## Setup

```bash
npm install
cp .env.example .env
# editar .env con tu MONGODB_URI
npm run dev
```

## Endpoints

### Katanas
- `GET /api/katanas` — listar
- `GET /api/katanas/:id` — obtener una
- `POST /api/katanas` — crear
- `PUT /api/katanas/:id` — actualizar
- `DELETE /api/katanas/:id` — eliminar

### Gods
- `GET /api/gods` — listar
- `GET /api/gods/:id` — obtener uno
- `POST /api/gods` — crear
- `PUT /api/gods/:id` — actualizar
- `DELETE /api/gods/:id` — eliminar

## Estructura

```
src/
├── config/        # conexión DB
├── controllers/   # lógica de endpoints
├── models/        # esquemas Mongoose
├── routes/        # rutas Express
├── middleware/    # middlewares custom
└── index.js       # entrypoint
```

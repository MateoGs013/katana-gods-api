# Katana Gods API

API REST sobre dioses sellados en katanas.

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
```

## Estructura

```
src/
├── config/        # conexión DB y configuración
├── controllers/   # lógica de endpoints
├── models/        # esquemas Mongoose
├── routes/        # rutas Express
├── middleware/    # middlewares custom
└── index.js       # entrypoint (pendiente)
```

# Frontend - Zero Trust (Actividad 1)

React + Vite. Organizacion por responsabilidades:

- `src/components/ui`   Componentes reutilizables sin logica de negocio (Button, TextField)
- `src/features/auth`   Servicio de autenticacion, contexto y formulario de login
- `src/features/dashboard` Componentes del Dashboard
- `src/pages`           Pantallas (Login, Dashboard)
- `src/routes`          Rutas protegidas
- `src/api`             Cliente HTTP unico (agrega el token JWT)

## Ejecutar (con el backend corriendo en el puerto 3000)
    npm install
    npm run dev      # http://localhost:5173

## Produccion
    npm run build    # genera /dist para servir con Nginx

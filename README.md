# Sistema de Autenticación de Usuarios

Este proyecto es un sistema de autenticación de usuarios desarrollado como parte de una prueba técnica. Implementa un backend robusto para el registro, inicio de sesión y gestión de perfiles de usuario.

## Características

- Registro de nuevos usuarios
- Inicio de sesión con autenticación JWT
- Gestión de perfiles de usuario
- Protección de rutas con middleware de autenticación
- Validación de datos de entrada
- Manejo centralizado de errores

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución de JavaScript
- **Express** - Framework para aplicaciones web
- **MongoDB** - Base de datos NoSQL (a través de Mongoose)
- **JWT** (JSON Web Tokens) - Para autenticación
- **dotenv** - Manejo de variables de entorno
- **CORS** - Middleware para habilitar CORS
- **Jest** - Framework de pruebas

## Estructura del Proyecto

```
src/
├── config/         # Configuraciones (base de datos, variables de entorno)
├── controllers/    # Controladores para manejar la lógica de negocio
├── models/         # Modelos de datos (Mongoose schemas)
├── routes/         # Definición de rutas de la API
└── utils/          # Utilidades y helpers
```

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=3000
   MONGODB_URI=tu_cadena_de_conexion_mongodb
   JWT_SECRET=tu_clave_secreta_jwt
   ```

## Uso

1. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
2. El servidor estará disponible en `http://localhost:3000`

## Endpoints

- `POST /api/auth/register` - Registrar un nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/users/me` - Obtener perfil del usuario actual (requiere autenticación)

## Pruebas

Para ejecutar las pruebas:
```bash
npm test
```

## Autor

**Luis Carlos Escorcia Manga**  


## Licencia

Este proyecto está bajo la Licencia ISC.

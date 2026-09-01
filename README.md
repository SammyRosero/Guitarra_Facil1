# 🎸 Guitarra Fácil v1

Sistema web de gestión de clases de guitarra desarrollado como primera versión funcional.

## Tecnologías
- Node.js
- Express
- MongoDB
- Mongoose
- EJS
- Bootstrap
- JavaScript

## Funcionalidades
- Registro e inicio de sesión.
- Roles: administrador, profesor y estudiante.
- Gestión de cursos.
- Gestión de estudiantes.
- Gestión de profesores.
- Matrículas con validación de capacidad y duplicados.
- Programación de clases con validación de conflictos de horario.
- Registro de asistencia.
- Registro de progreso académico.
- Dashboard con indicadores.

## Requisitos
1. Node.js instalado.
2. MongoDB local o una base MongoDB Atlas.

## Instalación

```bash
npm install
```

Crear `.env` copiando `.env.example` y configurar `MONGODB_URI`.

Luego:

```bash
npm start
```

Abrir:

http://localhost:3000

## Usuario administrador para la demo

Ejecuta primero:

```bash
node src/utils/seed.js
```

Credenciales:

- Correo: admin@guitarrafacil.com
- Contraseña: Admin123

## Buenas prácticas aplicadas
- Separación por responsabilidades.
- Nombres descriptivos.
- Validaciones en modelos y controladores.
- Contraseñas cifradas con bcrypt.
- Variables sensibles en `.env`.
- Control de acceso mediante middleware.
- Índices únicos para evitar duplicados.

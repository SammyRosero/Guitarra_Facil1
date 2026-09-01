# Arquitectura de paquetes - Guitarra Fácil v1

Se utiliza una arquitectura MVC organizada por responsabilidades.

```text
src/
├── app.js
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── dashboardController.js
│   ├── cursoController.js
│   ├── estudianteController.js
│   ├── profesorController.js
│   ├── matriculaController.js
│   ├── claseController.js
│   ├── asistenciaController.js
│   └── progresoController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Usuario.js
│   ├── Estudiante.js
│   ├── Profesor.js
│   ├── Curso.js
│   ├── Matricula.js
│   ├── Clase.js
│   ├── Asistencia.js
│   └── Progreso.js
├── routes/
│   ├── authRoutes.js
│   └── index.js
├── services/
│   └── authService.js
├── utils/
│   └── seed.js
└── views/
    ├── auth/
    ├── dashboard/
    ├── cursos/
    ├── estudiantes/
    ├── profesores/
    ├── matriculas/
    ├── clases/
    ├── asistencia/
    ├── progreso/
    └── partials/
```

## Responsabilidad de cada paquete

- **models:** representa las entidades y reglas de validación de MongoDB.
- **controllers:** recibe las peticiones y coordina la respuesta.
- **routes:** define las URL y enlaza cada ruta con su controlador.
- **services:** concentra lógica reutilizable, como autenticación y cifrado.
- **middleware:** controla autenticación y autorización por rol.
- **config:** contiene la conexión a la base de datos.
- **views:** contiene la interfaz web con EJS y Bootstrap.
- **utils:** contiene utilidades de apoyo, como la carga inicial de datos.
- **public:** contiene recursos estáticos, principalmente CSS.

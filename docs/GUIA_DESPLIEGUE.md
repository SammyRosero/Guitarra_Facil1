# Guía de despliegue v1

## Opción recomendada: Render + MongoDB Atlas

### 1. Base de datos
- Crear una cuenta en MongoDB Atlas.
- Crear un cluster gratuito.
- Crear un usuario de base de datos.
- Obtener el connection string.
- Reemplazar la contraseña en el connection string.

### 2. GitHub
En la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Version 1 - Guitarra Fácil"
git branch -M main
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
```

No subir el archivo `.env`.

### 3. Render
- Crear un Web Service.
- Conectar el repositorio de GitHub.
- Build Command: `npm install`
- Start Command: `npm start`
- Agregar las variables:
  - `MONGODB_URI`
  - `SESSION_SECRET`
  - `PORT=10000`

### 4. Verificación
Comprobar:
- Inicio de sesión.
- Registro de curso.
- Registro de estudiante.
- Matrícula.
- Programación de clase.
- Asistencia.
- Progreso.

La URL que entregue Render será el enlace de la versión v1.

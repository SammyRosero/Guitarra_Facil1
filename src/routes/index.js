const router = require("express").Router();
const { requireAuth, requireRole } = require("../middleware/auth");
const dashboard = require("../controllers/dashboardController");
const cursos = require("../controllers/cursoController");
const estudiantes = require("../controllers/estudianteController");
const profesores = require("../controllers/profesorController");
const matriculas = require("../controllers/matriculaController");
const clases = require("../controllers/claseController");
const asistencia = require("../controllers/asistenciaController");
const progreso = require("../controllers/progresoController");

router.get("/", (req, res) => res.redirect(req.session.usuario ? "/dashboard" : "/login"));
router.get("/dashboard", requireAuth, dashboard.index);

router.get("/cursos", requireAuth, cursos.listar);
router.get("/cursos/nuevo", requireRole("administrador"), cursos.formNuevo);
router.post("/cursos", requireRole("administrador"), cursos.crear);
router.get("/cursos/:id/editar", requireRole("administrador"), cursos.formEditar);
router.post("/cursos/:id", requireRole("administrador"), cursos.actualizar);
router.post("/cursos/:id/desactivar", requireRole("administrador"), cursos.desactivar);

router.get("/estudiantes", requireRole("administrador"), estudiantes.listar);
router.get("/estudiantes/nuevo", requireRole("administrador"), estudiantes.formNuevo);
router.post("/estudiantes", requireRole("administrador"), estudiantes.crear);

router.get("/profesores", requireRole("administrador"), profesores.listar);
router.get("/profesores/nuevo", requireRole("administrador"), profesores.formNuevo);
router.post("/profesores", requireRole("administrador"), profesores.crear);

router.get("/matriculas", requireRole("administrador"), matriculas.listar);
router.get("/matriculas/nueva", requireRole("administrador"), matriculas.formNueva);
router.post("/matriculas", requireRole("administrador"), matriculas.crear);
router.post("/matriculas/:id/cancelar", requireRole("administrador"), matriculas.cancelar);

router.get("/clases", requireAuth, clases.listar);
router.get("/clases/nueva", requireRole("administrador"), clases.formNueva);
router.post("/clases", requireRole("administrador"), clases.crear);

router.get("/asistencia", requireRole("administrador", "profesor"), asistencia.listar);
router.get("/asistencia/nueva", requireRole("administrador", "profesor"), asistencia.formNueva);
router.post("/asistencia", requireRole("administrador", "profesor"), asistencia.crear);

router.get("/progreso", requireRole("administrador", "profesor", "estudiante"), progreso.listar);
router.get("/progreso/nuevo", requireRole("administrador", "profesor"), progreso.formNuevo);
router.post("/progreso", requireRole("administrador", "profesor"), progreso.crear);

module.exports = router;

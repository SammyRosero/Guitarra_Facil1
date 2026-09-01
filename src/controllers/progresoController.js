const Progreso = require("../models/Progreso");
const Estudiante = require("../models/Estudiante");
const Curso = require("../models/Curso");

exports.listar = async (req, res) => {
  const progresos = await Progreso.find()
    .populate({ path: "estudiante", populate: "usuario" })
    .populate("curso")
    .sort({ fecha: -1 });
  res.render("progreso/index", { progresos });
};

exports.formNuevo = async (req, res) => {
  const estudiantes = await Estudiante.find({ estado: true }).populate("usuario");
  const cursos = await Curso.find({ estado: true });
  res.render("progreso/form", { estudiantes, cursos, error: null });
};

exports.crear = async (req, res) => {
  const estudiantes = await Estudiante.find({ estado: true }).populate("usuario");
  const cursos = await Curso.find({ estado: true });
  try {
    await Progreso.create({
      estudiante: req.body.estudiante,
      curso: req.body.curso,
      nivel: req.body.nivel,
      observacion: req.body.observacion
    });
    res.redirect("/progreso");
  } catch (error) {
    res.render("progreso/form", { estudiantes, cursos, error: "No fue posible registrar el progreso." });
  }
};

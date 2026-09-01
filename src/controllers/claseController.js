const Clase = require("../models/Clase");
const Curso = require("../models/Curso");
const Profesor = require("../models/Profesor");

exports.listar = async (req, res) => {
  const clases = await Clase.find().populate("curso").populate({ path: "profesor", populate: { path: "usuario" } }).sort({ fecha: 1 });
  res.render("clases/index", { clases });
};

exports.formNueva = async (req, res) => {
  const cursos = await Curso.find({ estado: true });
  const profesores = await Profesor.find({ estado: true }).populate("usuario");
  res.render("clases/form", { cursos, profesores, error: null });
};

exports.crear = async (req, res) => {
  const cursos = await Curso.find({ estado: true });
  const profesores = await Profesor.find({ estado: true }).populate("usuario");
  try {
    const conflicto = await Clase.findOne({
      profesor: req.body.profesor,
      fecha: new Date(req.body.fecha),
      hora: req.body.hora,
      estado: { $ne: "Cancelada" }
    });
    if (conflicto) throw new Error("El profesor ya tiene una clase en ese horario.");

    await Clase.create({
      curso: req.body.curso,
      profesor: req.body.profesor,
      fecha: new Date(req.body.fecha),
      hora: req.body.hora,
      modalidad: req.body.modalidad
    });
    res.redirect("/clases");
  } catch (error) {
    res.render("clases/form", { cursos, profesores, error: error.message });
  }
};

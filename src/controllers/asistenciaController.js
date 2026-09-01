const Asistencia = require("../models/Asistencia");
const Clase = require("../models/Clase");
const Estudiante = require("../models/Estudiante");

exports.listar = async (req, res) => {
  const asistencias = await Asistencia.find()
    .populate({ path: "clase", populate: ["curso", "profesor"] })
    .populate({ path: "estudiante", populate: "usuario" })
    .sort({ _id: -1 });
  res.render("asistencia/index", { asistencias });
};

exports.formNueva = async (req, res) => {
  const clases = await Clase.find().populate("curso").populate({ path: "profesor", populate: "usuario" });
  const estudiantes = await Estudiante.find({ estado: true }).populate("usuario");
  res.render("asistencia/form", { clases, estudiantes, error: null });
};

exports.crear = async (req, res) => {
  const clases = await Clase.find().populate("curso").populate({ path: "profesor", populate: "usuario" });
  const estudiantes = await Estudiante.find({ estado: true }).populate("usuario");
  try {
    await Asistencia.create({
      clase: req.body.clase,
      estudiante: req.body.estudiante,
      estado: req.body.estado,
      observacion: req.body.observacion
    });
    res.redirect("/asistencia");
  } catch (error) {
    res.render("asistencia/form", { clases, estudiantes, error: "La asistencia ya existe o los datos no son válidos." });
  }
};

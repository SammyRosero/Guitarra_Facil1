const Matricula = require("../models/Matricula");
const Curso = require("../models/Curso");
const Estudiante = require("../models/Estudiante");

exports.listar = async (req, res) => {
  const matriculas = await Matricula.find()
    .populate({ path: "estudiante", populate: { path: "usuario" } })
    .populate("curso")
    .sort({ fechaMatricula: -1 });
  res.render("matriculas/index", { matriculas });
};

exports.formNueva = async (req, res) => {
  const estudiantes = await Estudiante.find({ estado: true }).populate("usuario");
  const cursos = await Curso.find({ estado: true });
  res.render("matriculas/form", { estudiantes, cursos, error: null });
};

exports.crear = async (req, res) => {
  const estudiantes = await Estudiante.find({ estado: true }).populate("usuario");
  const cursos = await Curso.find({ estado: true });

  try {
    const curso = await Curso.findById(req.body.curso);
    if (!curso || !curso.estado) throw new Error("Curso no disponible.");

    const activas = await Matricula.countDocuments({ curso: curso._id, estado: "Activa" });
    if (activas >= curso.capacidad) throw new Error("El curso alcanzó su capacidad máxima.");

    const existe = await Matricula.findOne({
      estudiante: req.body.estudiante,
      curso: req.body.curso,
      estado: "Activa"
    });
    if (existe) throw new Error("El estudiante ya tiene una matrícula activa en este curso.");

    await Matricula.create({ estudiante: req.body.estudiante, curso: req.body.curso });
    res.redirect("/matriculas");
  } catch (error) {
    res.render("matriculas/form", { estudiantes, cursos, error: error.message });
  }
};

exports.cancelar = async (req, res) => {
  await Matricula.findByIdAndUpdate(req.params.id, { estado: "Cancelada" });
  res.redirect("/matriculas");
};

const Curso = require("../models/Curso");
const Estudiante = require("../models/Estudiante");
const Profesor = require("../models/Profesor");
const Matricula = require("../models/Matricula");

exports.index = async (req, res) => {
  const [cursos, estudiantes, profesores, matriculas] = await Promise.all([
    Curso.countDocuments({ estado: true }),
    Estudiante.countDocuments({ estado: true }),
    Profesor.countDocuments({ estado: true }),
    Matricula.countDocuments({ estado: "Activa" })
  ]);
  res.render("dashboard/index", { cursos, estudiantes, profesores, matriculas });
};

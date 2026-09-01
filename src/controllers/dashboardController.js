const Curso = require("../models/Curso");
const Estudiante = require("../models/Estudiante");
const Profesor = require("../models/Profesor");
const Matricula = require("../models/Matricula");

exports.index = async (req, res) => {
    try {
        const totalCursos = await Curso.countDocuments();
        const totalEstudiantes = await Estudiante.countDocuments();
        const totalProfesores = await Profesor.countDocuments();
        const totalMatriculas = await Matricula.countDocuments();

        res.render("dashboard/index", {
            usuario: req.session.usuario,
            totalCursos,
            totalEstudiantes,
            totalProfesores,
            totalMatriculas,
            version: "v2.0 - Optimizado"
        });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { error });
    }
};
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const Estudiante = require("../models/Estudiante");

exports.listar = async (req, res) => {
  const estudiantes = await Estudiante.find().populate("usuario").sort({ fechaRegistro: -1 });
  res.render("estudiantes/index", { estudiantes });
};

exports.formNuevo = (req, res) => res.render("estudiantes/form", { error: null });

exports.crear = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const usuario = await Usuario.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      correo: req.body.correo,
      password,
      rol: "estudiante"
    });
    await Estudiante.create({
      usuario: usuario._id,
      nivel: req.body.nivel,
      telefono: req.body.telefono
    });
    res.redirect("/estudiantes");
  } catch (error) {
    res.render("estudiantes/form", { error: error.code === 11000 ? "El correo ya está registrado." : "Error al guardar." });
  }
};

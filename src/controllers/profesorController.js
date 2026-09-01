const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const Profesor = require("../models/Profesor");

exports.listar = async (req, res) => {
  const profesores = await Profesor.find().populate("usuario").sort({ _id: -1 });
  res.render("profesores/index", { profesores });
};

exports.formNuevo = (req, res) => res.render("profesores/form", { error: null });

exports.crear = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const usuario = await Usuario.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      correo: req.body.correo,
      password,
      rol: "profesor"
    });
    await Profesor.create({
      usuario: usuario._id,
      especialidad: req.body.especialidad,
      experiencia: Number(req.body.experiencia),
      telefono: req.body.telefono
    });
    res.redirect("/profesores");
  } catch (error) {
    res.render("profesores/form", { error: error.code === 11000 ? "El correo ya está registrado." : "Error al guardar." });
  }
};

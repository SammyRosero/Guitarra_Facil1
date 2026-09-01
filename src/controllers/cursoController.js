const Curso = require("../models/Curso");

exports.listar = async (req, res) => {
  const cursos = await Curso.find().sort({ createdAt: -1 });
  res.render("cursos/index", { cursos });
};

exports.formNuevo = (req, res) => res.render("cursos/form", { curso: null });

exports.crear = async (req, res) => {
  await Curso.create({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    nivel: req.body.nivel,
    modalidad: req.body.modalidad,
    precio: Number(req.body.precio),
    capacidad: Number(req.body.capacidad)
  });
  res.redirect("/cursos");
};

exports.formEditar = async (req, res) => {
  const curso = await Curso.findById(req.params.id);
  res.render("cursos/form", { curso });
};

exports.actualizar = async (req, res) => {
  await Curso.findByIdAndUpdate(req.params.id, {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    nivel: req.body.nivel,
    modalidad: req.body.modalidad,
    precio: Number(req.body.precio),
    capacidad: Number(req.body.capacidad)
  });
  res.redirect("/cursos");
};

exports.desactivar = async (req, res) => {
  await Curso.findByIdAndUpdate(req.params.id, { estado: false });
  res.redirect("/cursos");
};

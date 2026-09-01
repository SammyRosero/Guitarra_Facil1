const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

async function login(correo, password) {
  const usuario = await Usuario.findOne({ correo: correo.toLowerCase(), estado: true });
  if (!usuario) return null;

  const correcto = await bcrypt.compare(password, usuario.password);
  if (!correcto) return null;

  return {
    id: usuario._id.toString(),
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    correo: usuario.correo,
    rol: usuario.rol
  };
}

async function crearUsuario(data) {
  const password = await bcrypt.hash(data.password, 10);
  return Usuario.create({ ...data, password });
}

module.exports = { login, crearUsuario };

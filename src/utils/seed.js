require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");
const Usuario = require("../models/Usuario");
const Estudiante = require("../models/Estudiante");
const Profesor = require("../models/Profesor");
const Curso = require("../models/Curso");

async function seed() {
  await connectDB();

  const pass = await bcrypt.hash("Admin123", 10);
  const admin = await Usuario.findOneAndUpdate(
    { correo: "admin@guitarrafacil.com" },
    { nombre: "Administrador", apellido: "Guitarra Fácil", correo: "admin@guitarrafacil.com", password: pass, rol: "administrador", estado: true },
    { upsert: true, new: true }
  );

  const cursos = [
    { nombre: "Guitarra Básica", descripcion: "Acordes, ritmo y primeros ejercicios.", nivel: "Principiante", modalidad: "Presencial", precio: 25, capacidad: 15 },
    { nombre: "Guitarra Intermedia", descripcion: "Técnicas, escalas y repertorio.", nivel: "Intermedio", modalidad: "Presencial", precio: 30, capacidad: 12 },
    { nombre: "Guitarra Avanzada", descripcion: "Improvisación, solos y técnica avanzada.", nivel: "Avanzado", modalidad: "Virtual", precio: 35, capacidad: 10 }
  ];

  for (const c of cursos) {
    await Curso.findOneAndUpdate({ nombre: c.nombre }, c, { upsert: true });
  }

  console.log("✓ Datos iniciales creados.");
  console.log("Administrador: admin@guitarrafacil.com / Admin123");
  await mongoose.connection.close();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});

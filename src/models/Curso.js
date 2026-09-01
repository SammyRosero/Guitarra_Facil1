const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  descripcion: { type: String, required: true, trim: true },
  nivel: { type: String, enum: ["Principiante", "Intermedio", "Avanzado"], required: true },
  modalidad: { type: String, enum: ["Presencial", "Virtual"], required: true },
  precio: { type: Number, required: true, min: 0 },
  capacidad: { type: Number, required: true, min: 1 },
  estado: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Curso", cursoSchema);

const mongoose = require("mongoose");

const progresoSchema = new mongoose.Schema({
  estudiante: { type: mongoose.Schema.Types.ObjectId, ref: "Estudiante", required: true },
  curso: { type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true },
  fecha: { type: Date, default: Date.now },
  nivel: { type: String, enum: ["Principiante", "Intermedio", "Avanzado"], required: true },
  observacion: { type: String, required: true, trim: true }
});

module.exports = mongoose.model("Progreso", progresoSchema);

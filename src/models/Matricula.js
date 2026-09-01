const mongoose = require("mongoose");

const matriculaSchema = new mongoose.Schema({
  estudiante: { type: mongoose.Schema.Types.ObjectId, ref: "Estudiante", required: true },
  curso: { type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true },
  fechaMatricula: { type: Date, default: Date.now },
  estado: { type: String, enum: ["Activa", "Cancelada"], default: "Activa" }
});

matriculaSchema.index({ estudiante: 1, curso: 1 }, { unique: true });

module.exports = mongoose.model("Matricula", matriculaSchema);

const mongoose = require("mongoose");

const claseSchema = new mongoose.Schema({
  curso: { type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true },
  profesor: { type: mongoose.Schema.Types.ObjectId, ref: "Profesor", required: true },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  modalidad: { type: String, enum: ["Presencial", "Virtual"], required: true },
  estado: { type: String, enum: ["Programada", "Realizada", "Cancelada"], default: "Programada" }
});

module.exports = mongoose.model("Clase", claseSchema);

const mongoose = require("mongoose");

const asistenciaSchema = new mongoose.Schema({
  clase: { type: mongoose.Schema.Types.ObjectId, ref: "Clase", required: true },
  estudiante: { type: mongoose.Schema.Types.ObjectId, ref: "Estudiante", required: true },
  estado: { type: String, enum: ["Presente", "Ausente", "Justificado"], required: true },
  observacion: { type: String, trim: true }
});

asistenciaSchema.index({ clase: 1, estudiante: 1 }, { unique: true });

module.exports = mongoose.model("Asistencia", asistenciaSchema);

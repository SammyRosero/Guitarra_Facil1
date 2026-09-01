const mongoose = require("mongoose");

const estudianteSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true, unique: true },
  nivel: { type: String, enum: ["Principiante", "Intermedio", "Avanzado"], default: "Principiante" },
  telefono: { type: String, trim: true },
  fechaRegistro: { type: Date, default: Date.now },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model("Estudiante", estudianteSchema);

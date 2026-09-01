const mongoose = require("mongoose");

const profesorSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true, unique: true },
  especialidad: { type: String, required: true, trim: true },
  experiencia: { type: Number, min: 0, default: 0 },
  telefono: { type: String, trim: true },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model("Profesor", profesorSchema);

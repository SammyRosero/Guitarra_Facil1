const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✓ Base de datos conectada");
  } catch (error) {
    console.error("✗ Error de conexión:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;

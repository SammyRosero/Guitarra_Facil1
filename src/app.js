require("dotenv").config();

const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../public")));

app.use(session({
  secret: process.env.SESSION_SECRET || "guitarra-facil-dev",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 4 }
}));

app.use((req, res, next) => {
  res.locals.usuario = req.session.usuario || null;
  next();
});

app.use(require("./routes/authRoutes"));
app.use(require("./routes/index"));

app.use((req, res) => res.status(404).render("error", { mensaje: "Página no encontrada." }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✓ Guitarra Fácil v1 ejecutándose en http://localhost:${PORT}`));

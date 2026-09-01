const { login, crearUsuario } = require("../services/authService");

exports.formLogin = (req, res) => res.render("auth/login", { error: null });

exports.login = async (req, res) => {
  try {
    const usuario = await login(req.body.correo, req.body.password);
    if (!usuario) return res.render("auth/login", { error: "Correo o contraseña incorrectos." });
    req.session.usuario = usuario;
    res.redirect("/dashboard");
  } catch (error) {
    res.render("auth/login", { error: "No fue posible iniciar sesión." });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
};

exports.formRegistro = (req, res) => res.render("auth/registro", { error: null });

exports.registro = async (req, res) => {
  try {
    await crearUsuario({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      correo: req.body.correo,
      password: req.body.password,
      rol: "estudiante"
    });
    res.redirect("/login");
  } catch (error) {
    const msg = error.code === 11000 ? "El correo ya está registrado." : "No fue posible registrar el usuario.";
    res.render("auth/registro", { error: msg });
  }
};

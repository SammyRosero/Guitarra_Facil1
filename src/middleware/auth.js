function requireAuth(req, res, next) {
  if (!req.session.usuario) return res.redirect("/login");
  next();
}

function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.session.usuario) return res.redirect("/login");
    if (!roles.includes(req.session.usuario.rol)) {
      return res.status(403).render("error", { mensaje: "No tiene permisos para realizar esta acción." });
    }
    next();
  };
}

module.exports = { requireAuth, requireRole };

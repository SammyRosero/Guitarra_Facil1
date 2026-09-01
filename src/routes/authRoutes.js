const router = require("express").Router();
const c = require("../controllers/authController");

router.get("/login", c.formLogin);
router.post("/login", c.login);
router.get("/registro", c.formRegistro);
router.post("/registro", c.registro);
router.post("/logout", c.logout);

module.exports = router;

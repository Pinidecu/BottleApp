const { Router } = require("express");
const router = Router();

const {
  getUsuarios,
  getLocales,
  getTransacciones,
  createUser,
  createLocales,
  createTransaccion,
  getUsersByID,
  getUsersByEmail,
  deleteUser,
} = require("../controllers/index.controller");

router.get("/usuarios", getUsuarios);
router.get("/locales", getLocales);
router.get("/transacciones", getTransacciones);

router.get("/usuarios/:id", getUsersByID);
router.get("/usuarios/mail/:email", getUsersByEmail);

router.post("/usuarios", createUser);
router.post("/locales", createLocales);
router.post("/transacciones", createTransaccion);

/* router.delete("/usuarios/:id", deleteUser);
router.delete("/transacciones", deleteTransaccion); */

module.exports = router;

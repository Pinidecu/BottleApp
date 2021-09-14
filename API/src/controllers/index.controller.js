const { Usuarios, Locales, Transacciones } = require("../db");
const { Op } = require("sequelize");

const getUsuarios = async (req, res) => {
  const response = await Usuarios.findAll({
    include: Transacciones,
  });
  res.json(response);
};

const getLocales = async (req, res) => {
  const response = await Locales.findAll({
    include: Transacciones,
  });
  res.json(response);
};

const getTransacciones = async (req, res) => {
  const response = await Transacciones.findAll({
    include: [Usuarios, Locales],
  });
  res.json(response);
};

const getUsersByID = async (req, res) => {
  const id = req.params.id;
  const response = await Usuarios.findAll({
    include: Transacciones,
    where: { id: id },
  });
  res.json(response);
};

const getUsersByEmail = async (req, res) => {
  const email = req.params.email;
  const response = await Usuarios.findAll({
    include: Transacciones,
    where: { email: email },
  });
  res.json(response);
};

const createUser = async (req, res) => {
  const { nombre, apellido, email, contraseña } = req.body;
  const response = await Usuarios.create({
    nombre,
    apellido,
    email,
    contraseña,
  });
  res.json({
    mensaje: "Usuario creado",
    body: { user: response },
  });
};

const createLocales = async (req, res) => {
  const { direccion, envases, horario, tipo } = req.body;
  const response = await Locales.create({
    direccion,
    envases,
    horario,
    tipo,
  });

  return res.json({
    mensaje: "Local creado",
    body: { local: response },
  });
};

const createTransaccion = async (req, res) => {
  const { envases, IDUsuario, IDLocal } = req.body;
  const response = await Transacciones.create({
    envases,
  });
  await response.setUsuario(IDUsuario);
  await response.setLocale(IDLocal);
  return res.json({
    mensaje: "Transaccion creada",
    body: { transaccion: response },
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const response = await Usuarios.destroy({
    where: { id: id },
  });
  res.json({ mensaje: "Usuario borrado" });
};

const deleteMenssages = async (req, res) => {
  const response = await Mensajes.destroy({ where: {} });
  res.json({ mensaje: "Mensajes borrados" });
};

module.exports = {
  getUsuarios,
  getLocales,
  getTransacciones,
  createUser,
  createLocales,
  createTransaccion,
  getUsersByID,
  getUsersByEmail,
  deleteUser,
  deleteMenssages,
};

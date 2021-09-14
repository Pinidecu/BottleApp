const { DataTypes } = require("sequelize");

var Sequelize = require("sequelize");
const S = Sequelize;

const { STRING, ENUM, TEXT, VIRTUAL, INTEGER, ARRAY, BOOLEAN, JSON } =
  S.DataTypes;
//console.log(S.DataTypes)

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Usuarios", {
    nombre: { type: STRING, allowNull: false },
    apellido: { type: STRING, allowNull: false },
    email: { type: TEXT, allowNull: false, unique: true },
    contraseña: { type: STRING, allowNull: false },
    envases: { type: INTEGER, defaultValue: 0 },
  });

  sequelize.define("Locales", {
    direccion: { type: STRING, allowNull: false },
    envases: { type: INTEGER, defaultValue: 0 },
    horario: { type: STRING, allowNull: false },
    tipo: { type: STRING, allowNull: false },
  });

  sequelize.define("Transacciones", {
    envases: { type: INTEGER, allowNull: false },
  });
};

const app = require("./src/app.js");
const { conn } = require("./src/db.js");

const { Usuarios, Locales, Transacciones } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}`); // eslint-disable-line no-console
  });
});

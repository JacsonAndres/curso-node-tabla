const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "es la base de la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "este es el numero haasta donde llega la tabla de multiplicar",
  })

  .option("l", {
    alias: "listar",
    type: "boolean",

    default: false,
    describe: "muestra la tabla de multiplicar en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;

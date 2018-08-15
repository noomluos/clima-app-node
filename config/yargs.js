const argv = require("yargs")
    .options({
        direccion: {
            alias: "d",
            descrip: "Dirección para obtener el clima",
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
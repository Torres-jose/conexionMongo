const mongoose = require("mongoose");


const UsuarioModel = mongoose.Schema({
    nombre: String,
    usuario: String,
    correo: String
});

const Usurio = mongoose.model('usuario', UsuarioModel);

module.exports = Usurio;
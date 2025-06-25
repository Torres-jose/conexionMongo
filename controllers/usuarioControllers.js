const usuario = require('../models/usuarioModels');

const db = require('../db');

db.conexion();

const getUsuario = async (req, res) =>{
    try {
        const datos = await usuario.find();
        res.status(200).send(datos);
    } catch (error) {
        res.status(500).json({status:"Error al extraer los datos"})
    }
}
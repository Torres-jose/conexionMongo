const usuarios = require('../models/usuarioModels');

const db = require('../db');
const { trusted, model } = require('mongoose');

db.conexion();

const getUsuario = async (req, res) =>{
    try {
        const datos = await usuarios.find();
        res.status(200).send(datos);
    } catch (error) {
        res.status(500).json({status:"Error al extraer los datos"})
    };
};

const getUsuarioPorId = async (req, res) =>{
    try {
        const id = req.params.id;
        const datos = await usuarios.find({_id:id});
        res.status(200).send(datos);
    } catch (error) {
        res.status(500).json({status:"Error al extra el dato "});
    };
};

const postUsuario = async (req, res)=>{
    try {
        const datos = new usuarios(req.body);
        await datos.save();
        res.status(200).send(datos);
    } catch (error) {
        res.status(500).json({status:"error al extraer los datos"});
    };
};

const putUsuario = async (req, res)=>{
    const id =req.params.id;
    try {
        const datos = await usuarios.findbyIdAndUpdate(id, req.body, {new:true});
        res.status(200).send(datos);
    } catch (error) {error
        res.status(500).json({status: "Error al extraer los datos"});
    };

};

const deleteUsuario = async (req, res)=>{
    const id = req.params.id;
    try {
        const datos = await usuarios.findbyIdAndDelete(id);
        res.status(200).json(datos);
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"Error al extraer los datos"})
    };
};

module.exports = {
    getUsuario,
    getUsuarioPorId,
    postUsuario,
    putUsuario,
    deleteUsuario
};
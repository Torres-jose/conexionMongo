const mongoose = require('mongoose');

const conexion = () =>{
    mongoose.connect(process.env.mongoose)
    .then((result) => {console.log("conexion estable")})
    .catch((error) => { console.log("Se ha generado el siguiente error " + error)
        
    });
}

module.exports = {conexion}
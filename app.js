const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 1000;

app.use(express.json());

const UsuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api/usuario', UsuarioRoutes);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://locahost:${PORT}`);
})

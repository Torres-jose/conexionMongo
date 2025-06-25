const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 1000;

app.use(express.json());

//aqui la rustas
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://locahost:${PORT}`);
})

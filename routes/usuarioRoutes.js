const express = require('express');
const router = express.Router();

const {
    getUsuario,
    getUsuarioPorId,
    postUsuario,
    putUsuario,
    deleteUsuario
} = require('../controllers/usuarioControllers');

router.get('/',getUsuario);
router.get('/:id',getUsuarioPorId);
router.post('/',postUsuario);
router.put('/:id',putUsuario);
router.delete('/:id',deleteUsuario);

module.exports = router;
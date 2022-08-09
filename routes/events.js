/*
    event Routes
    /api/events
*/
const { Router } = require('express');
const { validarJWT } = require("../middlewares/validar-jwt");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Todas tienen que pasar por la validacion del JWT
router.use( validarJWT )


// Obtener eventos
router.get('/', getEventos );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','La fecha de inicio es obligatorio').custom( isDate ),
        check('end','La fecha de finalizacion es obligatorio').custom( isDate ),
        validarCampos
    ],
    crearEvento
);

// Actualizar evento
router.put(
    '/:id',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','La fecha de inicio es obligatorio').custom( isDate ),
        check('end','La fecha de finalizacion es obligatorio').custom( isDate ),
        validarCampos
    ],
    actualizarEvento 
);

// Eliminar evento
router.delete('/:id', eliminarEvento );


module.exports = router;




















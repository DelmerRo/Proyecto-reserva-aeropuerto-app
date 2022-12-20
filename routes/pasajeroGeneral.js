const express = require("express");
const router = express.Router();
const { getPasajeros,crearPasajeros } = require("../controllers/pasajeroGeneral.controller")
//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get('/', getPasajeros);
//router.get('/producto',getItem);
//router.get('/enRango',getEnRango);
router.post('/nuevoPasajero/', crearPasajeros);
//router.put('/editarProducto/:id', updateItem);
//router.delete('/eliminarProducto/:id', deleteItem);


module.exports = router
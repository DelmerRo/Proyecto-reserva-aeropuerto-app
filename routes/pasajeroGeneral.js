const express = require("express");
const router = express.Router();
const { getPasajeros,crearPasajeros } = require("../controllers/pasajeroGeneral.controller")

router.get('/', getPasajeros);
router.post('/nuevoPasajero/', crearPasajeros);


module.exports = router
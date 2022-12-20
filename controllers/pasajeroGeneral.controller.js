const PasajeroGeneral = require('../models/PasajeroGeneral')
const PasajeroFactory = require('../factories/pasajero_factory')
/**obtener lista de la base de datos!*/


const getPasajeros = async (req, res) => {
    try {;
        const pasajeros = await res.locals.aeropuerto.listaDePasajerosGenerales();
        res.status(200).json({ status: 200,  pasajeros: pasajeros });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


/*  insertar un registro*/
const crearPasajeros = async (req, res) => {

    const { nombreApellido, pasaporte, fechaDeNacimiento, horaDeVuelo,tipo } = req.body;
    let newPasajero = null;
    try {
        newPasajero = await new PasajeroFactory().crear(nombreApellido, pasaporte, fechaDeNacimiento, horaDeVuelo,tipo );
        const unPasajero = await res.locals.aeropuerto.agregarPasajero(res, newPasajero)
        res.status(200).json({ status: 200, Pasajero: unPasajero });
    } catch (err) {
        res.status(500).json({ message: err.message, status: 500 })
    }

};

module.exports = { getPasajeros,crearPasajeros}
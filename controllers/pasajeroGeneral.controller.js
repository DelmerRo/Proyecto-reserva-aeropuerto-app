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

/***obtener un registro!*/
const getItem = async (req, res) => {
    let query = require('url').parse(req.url, true).query;
    let id = query.id;
    if (id) {
        try {
            const unProducto = await res.locals.aeropuerto.buscarUno(id);
            res.status(200).json({ status: 200, Producto: unProducto });

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    } else {
        res.sendStatus(403);
    }
}

/***obtener un registro!*/
const getEnRango = async (req, res) => {
    let query = require('url').parse(req.url, true).query;
    let min = query.min;
    let max = query.max;
    if (min && max) {
        try {
            const listaDeProductoFrutas = await res.locals.aeropuerto.getfrutaEnRangoPrecio(min, max);
            res.status(200).json({
                status: 200, getfrutaEnRangoPrecio: listaDeProductoFrutas,
            });

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    } else {
        res.sendStatus(403);
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

/**  actualizar un registro!*/

const updateItem = async (req, res) => {
    try {
        await res.locals.aeropuerto.actualizarFruta(req.params.id, req.body)
        res.status(200).json({ status: 200, productoFruta: req.body });
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

}

/**  *eliminar un registro!*/
const deleteItem = async (req, res) => {
    let id = req.params.id;
    try {
        await res.locals.aeropuerto.eliminarFruta(id)
        res.status(200).json({ status: 200, idProductoEliminado: id });
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = { getPasajeros,crearPasajeros}
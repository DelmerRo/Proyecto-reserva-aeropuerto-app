
const ProductoFruta = require('../models/ProductoFruta')
const ProductoFactory = require('../factories/producto_factory')
/**obtener lista de la base de datos!*/


const getItems = async (req, res) => {
    try {;
        const frutas = await res.locals.supermercado.listaDeProductosFrutas();
        res.status(200).json({ status: 200,  productoFrutas: frutas });
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
            const unProducto = await res.locals.supermercado.buscarUno(id);
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
            const listaDeProductoFrutas = await res.locals.supermercado.getfrutaEnRangoPrecio(min, max);
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
const createItem = async (req, res) => {

    const { nombre, precio, tipo } = req.body;
    let newProducto = null;
    try {
        newProducto = await new ProductoFactory().crear(nombre, precio, tipo);
        const unProducto = await res.locals.supermercado.agregarProducto(res, newProducto)
        res.status(200).json({ status: 200, temperaturas: unProducto });
    } catch (err) {
        res.status(500).json({ message: err.message, status: 500 })
    }

};

/**  actualizar un registro!*/

const updateItem = async (req, res) => {
    try {
        await res.locals.supermercado.actualizarFruta(req.params.id, req.body)
        res.status(200).json({ status: 200, productoFruta: req.body });
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

}

/**  *eliminar un registro!*/
const deleteItem = async (req, res) => {
    let id = req.params.id;
    try {
        await res.locals.supermercado.eliminarFruta(id)
        res.status(200).json({ status: 200, idProductoEliminado: id });
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = { getItems, getItem, getEnRango, createItem, updateItem, deleteItem }
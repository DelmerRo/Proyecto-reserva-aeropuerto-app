const { model } = require('mongoose');

const Producto = require('./Producto');
const productoSchema  = require('./schemas/ProductoSchema');

class ProductoFruta extends Producto {

    constructor() {
        super(nombre,precio,tipo);
    }

    esCritico(){
        return this.precio >1000;
    }
}

productoSchema.loadClass(ProductoFruta);
module.exports = model('ProductoFruta', productoSchema);
const { model } = require('mongoose');

const Producto = require('./Producto');
const productoSchema  = require('./schemas/ProductoSchema');

class ProductoVerdura extends Producto {

    constructor() {
        super(nombre,precio,tipo);
    }

    esCritico(){
        return this.magnitud >1500;
    }
  
}

productoSchema.loadClass(ProductoVerdura);
module.exports = model('ProductoVerdura', productoSchema);
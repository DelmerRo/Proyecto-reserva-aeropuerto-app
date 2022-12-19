
const  ProductoFruta  = require('../models/ProductoFruta')
const  ProductoVerdura  = require('../models/ProductoVerdura')
class ProductoFactory {
  constructor() {

  }
  crear(nombre, precio,tipo) {
    if (tipo == 'fruta') {
      return new ProductoFruta({nombre, precio})
    } else if (tipo == 'verdura') {
      return new ProductoVerdura({nombre, precio})
    } else {
     throw new Error("No existe tipo")
    }
  }
}
module.exports = ProductoFactory;


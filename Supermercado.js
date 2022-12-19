const { model } = require("mongoose");
const ProductoVerdura = require("./models/ProductoVerdura");
const ProductoFruta = require("./models/ProductoFruta");
const supermercadoSchema = require("./models/schemas/SupermercadoSchema");

class Supermercado {
    constructor(name) {
        //SINGLETON
        if (Supermercado.instancia) {
            console.log('Creada');
            return Supermercado.instancia;
        }
        this.name = name;
    }
    async agregarProducto(res, nuevoProducto) {
        let productoAgregado = null;
        try {
            productoAgregado = await nuevoProducto.save();
            if (nuevoProducto.esCritico()) {
                this.enviarMail(nuevoProducto)
            }
        } catch (error) {
            console.log(error.message)
        }
        return productoAgregado;
    }

    esCritico(){
        return  true
    }

    async listaDeProductosFrutas() {
        return await ProductoFruta.find().lean();
    }


    async getfrutaEnRangoPrecio(min, max) {
        let lista = [];
        let frutas = await ProductoFruta.find({})
        for (const unaFruta of frutas) {
            if (unaFruta.precio >= min && unaFruta.precio <= max)
                lista.push(unaFruta)
        }
        return lista;
    }

    enviarMail(nuevaTemperatura) {
        console.log(`Enviando mail a administrador@gmail.com....${nuevaTemperatura}`);
    }

    async buscarUno(id) {
        let unaFruta = await ProductoFruta.findById(id);
        if (!unaFruta) {
            throw new Error("No se encontro Temperatura con ese ID")
        }
        console.log(unaFruta)
        return unaFruta;
    }

    async actualizarFruta(id, params) {
        return await ProductoFruta.findByIdAndUpdate(id, params)
    }
    
    async eliminarFruta(id){
        await ProductoFruta.findByIdAndDelete(id);
    }
}
supermercadoSchema.loadClass(Supermercado);
module.exports = model("Supermercado", supermercadoSchema);
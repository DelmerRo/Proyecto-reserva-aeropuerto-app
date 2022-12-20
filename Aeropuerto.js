const { model } = require("mongoose");
const Notificacion = require("./models/notificacion");
const PasajeroGeneral = require("./models/PasajeroGeneral");
const aeropuertoSchema = require("./models/schemas/AeropuertoSchema");

class Aeropuerto {
    constructor(name) {
        //SINGLETON
        if (Aeropuerto.instancia) {
            console.log('Creada');
            return Aeropuerto.instancia;
        }
        this.name = name;
    }
    async agregarPasajero(res, nuevoPasajero) {
       let horaActual=15;
        let pasajeroAgregado = null;
        try {
            pasajeroAgregado = await nuevoPasajero.save();
            if (nuevoPasajero.esNotificable(horaActual)) {
                console.log("puse Notificar")
                this.notificar(horaActual)
            }
        } catch (error) {
            console.log(error.message)
        }
        return pasajeroAgregado;
    }

   async notificar(horaActual){
        let unaNot= new Notificacion(horaActual);
        await unaNot.save();
        this.enviarMail(horaActual)
    }
    
    async listaDePasajerosGenerales() {
        return await PasajeroGeneral.find().lean();
    }

    enviarMail(horaActual) {
        console.log(`tiene un vuelo programado para las ${horaActual} horas` );
    }

   
}
aeropuertoSchema.loadClass(Aeropuerto);
module.exports = model("Aeropuerto", aeropuertoSchema);
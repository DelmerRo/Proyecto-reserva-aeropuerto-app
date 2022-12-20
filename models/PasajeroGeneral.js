const { model } = require('mongoose');

const Pasajero = require('./Pasajero');
const PasajeroSchema  = require('./schemas/PasajeroSchema');

class PasajeroGeneral extends Pasajero {

    constructor() {
        super(nombreApellido, pasaporte, fechaDeNacimiento,horaDeVuelo,tipo);
    }

    esNotificable(horaActual){
        console.log(this.horaDeVuelo - horaActual)
        return  horaActual - this.horaDeVuelo  === 1;
    }
}

PasajeroSchema.loadClass(PasajeroGeneral);
module.exports = model('PasajeroGeneral', PasajeroSchema);
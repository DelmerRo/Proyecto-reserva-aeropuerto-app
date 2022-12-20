const  PasajeroGeneral  = require('../models/PasajeroGeneral')

class PasajeroFactory {
  constructor() {

  }
  crear(nombreApellido, pasaporte, fechaDeNacimiento,horaDeVuelo,tipo) {
    if(!nombreApellido){
      throw new Error("nombre o apellido es Nulo ovacio")
    }
    if(  !pasaporte){
      throw new Error("pasaporte invalido")
    }
    if (tipo == 'general') {
      return new PasajeroGeneral({nombreApellido, pasaporte, fechaDeNacimiento,horaDeVuelo})
    } else if(tipo == 'vip') {
    // return new PasajeroVip({nombreApellido, fechaDeNacimiento,horaDeVuelo})
    }
  }
}
module.exports = PasajeroFactory;


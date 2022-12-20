class Pasajero {

    constructor(nombreApellido,pasaporte, fechaDeNacimiento,horaDeVuelo,tipo) {
        this.nombreApellido = nombreApellido;
        this.pasaporte = pasaporte;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.horaDeVuelo = horaDeVuelo;
        this.tipo = tipo;
    }

    esNotificable(horaActual){
        return  null;
    }
    
}

module.exports = Pasajero;
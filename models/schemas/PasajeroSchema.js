const { Schema } = require('mongoose');

const PasajeroSchema = new Schema({
        nombreApellido: {
            type: String,
            require:true,
        },
        pasaporte: {
            type: Number,
            require:true,
        },
        fechaDeNacimiento: {
            type: String,
            require:true
        },
        horaDeVuelo: {
            type: Number,
            require:true,
            min:1,
            max:24
        },
        tipo: {
            type: String,
            require:true
        },
    }, {
        timestamps: true, //createdAt, updateAt
    });
module.exports = PasajeroSchema;
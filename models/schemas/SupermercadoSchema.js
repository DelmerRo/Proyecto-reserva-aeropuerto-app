const { Schema } = require('mongoose');

const supermercadoSchema = new Schema({

    name: {
        type: String,
        require: true
    }

}, {
    timestamps: true
})

module.exports = supermercadoSchema;
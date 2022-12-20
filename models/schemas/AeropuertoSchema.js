const { Schema } = require('mongoose');

const aeropuertoSchema = new Schema({

    name: {
        type: String,
        require: true
    }

}, {
    timestamps: true
})

module.exports = aeropuertoSchema;
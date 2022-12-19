const { Schema } = require('mongoose');

const productoSchema = new Schema({
        nombre: {
            type: String,
            require:true
        },
        precio: {
            type: Number,
            require:true
        },
        tipo: {
            type: String,
            require:true
        },
    }, {
        timestamps: true, //createdAt, updateAt
    });
module.exports = productoSchema;
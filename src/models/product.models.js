const {Schema, model} = require ('mongoose');

const ProductSchema= Schema({
    nombre: {
        type: String,
        required: true
    },
    marca:  {
        type: String,
        required: true
    },
    peso:  {
        type: String
    },
    tamaño:  {
        type: String
    },
    precio:  {
        type: Number,
        required: true
    },
    categoria:  {
        type: String,
        required: true
    },
    especie:  {
        type: String,
        required: true
    }
});

const ProductModel= model("Productos", ProductSchema);

module.exports= ProductModel
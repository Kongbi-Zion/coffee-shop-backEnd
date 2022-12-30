const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports  = mongoose.model('product', productSchema)
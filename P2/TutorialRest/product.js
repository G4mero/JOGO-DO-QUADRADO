/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    price: {
        type:Number,
        required: true
    },
    
    description: {
        type: String
    },
    
    createdAt: {
        type: Date,
    default: Date.now
    }
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;




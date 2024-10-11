const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
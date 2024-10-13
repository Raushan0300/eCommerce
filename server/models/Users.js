const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    cart:{
        product: [{
            productId: String,
            name: String,
            description: String,
            price: Number,
            category: String,
            quatity: Number,
        }],
        totalPrice: {
            type: Number,
            default: 0,
        },
        totalItems: {
            type: Number,
            default: 0,
        },
    }
});

const User = mongoose.model('User', Users);
module.exports = User
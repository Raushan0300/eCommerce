const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../models/Users');
const Product = require('../models/Products');
const { use } = require('./login');

router.post('/', async (req, res) => {
    const token = req.headers['authorization'];
    const {id} = req.body;

    if(!token) return res.status(401).json({msg: 'Unauthorized'});
    jwt.verify(token, process.env.JWT_SECRET, async(err, decoded)=>{
        if(err) return res.status(401).json({msg: 'Unauthorized'});
        if(decoded){
            const user = await User.findById(decoded.id);
            const product = await Product.findById(id);

            if(!product) return res.status(404).json({msg: 'Product not found'});

            const cart = user.cart;
            const existingProductIndex = cart.product.findIndex((p)=> p.productId === id);
            if(existingProductIndex > -1){
                cart.product[existingProductIndex].quatity += 1;
                cart.product[existingProductIndex].price += product.price;
            } else{
                cart.product.push({
                    productId: id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category: product.category,
                    quatity: 1,
                });
            };

            cart.totalPrice += product.price;
            cart.totalItems += 1;

            await user.save();
            return res.status(200).json({msg: 'Product added to cart'});
        }
    })
});

module.exports = router;
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const Products = require('../models/Products');

router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    const token = req.headers['authorization'];

    jwt.verify(token, process.env.JWT_SECRET, async()=>{
        const product = await Products.findById(id);
        if(product){
            return res.status(200).json(product);
        } else{
            return res.status(404).json({msg: 'Product not found'});
        }
    })
});

module.exports = router;
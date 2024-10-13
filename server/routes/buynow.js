const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const Users = require('../models/Users');
const Products = require('../models/Products');

router.post('/', async(req, res)=>{
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({msg: 'Unauthorized'});
    }

    jwt.verify(token, process.env.JWT_SECRET, async(err, decoded)=>{
        if(err){
            return res.status(401).json({msg: 'Unauthorized'});
        }
        if(decoded){
            let user = await Users.findById(decoded.id);
            if(!user){
                return res.status(404).json({msg: 'User not found'});
            }

            if(typeof(req.body.product) === 'object'){
                user.cart={product: [], totalPrice: 0, totalItems: 0};
            
            await user.save();
            return res.status(200).json({msg: 'Order placed successfully'});
            }

            return res.status(200).json({msg: 'Order placed successfully'});

        }
    });
});

module.exports = router;
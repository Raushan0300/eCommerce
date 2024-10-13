const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../models/Users');

router.get('/', async(req, res)=>{
    const token = req.headers['authorization'];
    if(!token) return res.status(401).json({msg: 'Unauthorized'});
    jwt.verify(token, process.env.JWT_SECRET, async(err, decoded)=>{
        if(err) return res.status(401).json({msg: 'Unauthorized'});
        if(decoded){
            const user = await User.findById(decoded.id);
            return res.status(200).json(user.cart);
        }
    })
});

module.exports = router;
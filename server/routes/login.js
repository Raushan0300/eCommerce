const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const Users = require('../models/Users');

router.post('/', async(req, res)=>{
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({msg: 'Please enter all fields'});

    const user = await Users.findOne({email});
    if(!user) return res.status(404).json({msg: 'User does not exist'});

    const hashedPass = await bcrypt.compare(password, user.password);
    if(!hashedPass) return res.status(404).json({msg: 'Invalid credentials'});

    await jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: 3600}, (err, token)=>{
        if(err) console.log(err);
        res.status(200).json({
            token
        });
    })
});

module.exports = router;
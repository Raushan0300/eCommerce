const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

const Users = require('../models/Users');

router.post('/', async(req, res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password) return res.status(400).json({msg: 'Please enter all fields'});

    const user = await Users.findOne({email});
    if(user) return res.status(400).json({msg: 'User already exists'});

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = new Users({
        name,
        email,
        password: hashedPass
    });

    await newUser.save();
    return res.status(200).json({msg: 'User registered successfully'});
});

module.exports = router;
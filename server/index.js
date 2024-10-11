const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
require('./connection');

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/register'));
app.use('/recent-products', require('./routes/recentProducts'));
app.use('/most-purchased', require('./routes/mostPurchased'));
app.use('/products', require('./routes/products'));
app.use('/item', require('./routes/item'));

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
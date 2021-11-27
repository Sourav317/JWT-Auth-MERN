const express = require('express');
const app = express();
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const route = require('./Routes/Route');

app.use(cors());
app.use(express.json());

//Connect to DB
mongoose.connect(process.env.Db,() =>{
    console.log('Db Connected');
})

//Routes
app.use('/p',route);

app.get('/',(req,res) =>{
    res.send('i am here');
})

const PORT = 4000;
app.listen(PORT,console.log(`server is up and running on ${PORT}`));

//to run write  -  npm run server
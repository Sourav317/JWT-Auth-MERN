const express = require('express');
const app = express();
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const route = require('./Routes/Route');

app.use(cors());
app.use(express.json());

//Connect to DB
mongoose.connect('mongodb+srv://Kuruma:Kuruma123@cluster0.mkcms.mongodb.net/UserData?retryWrites=true&w=majority',() =>{
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
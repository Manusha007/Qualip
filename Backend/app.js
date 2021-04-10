//mongo:KzVpMlMpN1GFbNRk

const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const qlipRoutes = require('./routes/qlip');
const userRoutes = require('./routes/user');



const app = express();

mongoose.connect('mongodb+srv://qualip:KzVpMlMpN1GFbNRk@cluster0.3qwvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('MongoDB Connected!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(bodyParser.json());

app.use('/api/qlip',qlipRoutes);
app.use('/api/auth',userRoutes);



module.exports = app;
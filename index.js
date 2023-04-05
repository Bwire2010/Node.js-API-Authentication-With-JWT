
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require ('mongoose');

dotenv.config();


//connect to DB
mongoose.connect( process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to db!'))
  .catch(error => console.error(error));


//Import Routes
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute)



app.listen(3000, ()=> console.log('Server Up and running'))

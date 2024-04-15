const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();
const usermodel = require('./models/user')
const authroute = require('./routes/authroutes')
const cookieparser = require('cookie-parser')


const app = express();


// middleware
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));



// use of routes
app.use('/' , authroute);




// running server

const PORT=3000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
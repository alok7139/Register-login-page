const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/auth")
.then(() => console.log('database connected'))
.catch((err) => console.log('database not connected' , err));


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('user' , userSchema);


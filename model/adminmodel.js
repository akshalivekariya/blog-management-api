const mongoose = require('mongoose');

const adminlogin = new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});

module.exports = mongoose.model('admin',adminlogin);
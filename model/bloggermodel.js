const mongoose = require('mongoose');

 const blogermodel = new mongoose.Schema({
         email:{
         type:String,
     },
     password:{
         type:String,
     }
 });

module.exports = mongoose.model('blogger',blogermodel);

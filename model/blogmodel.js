const mongoose = require('mongoose');

const blog = new mongoose.Schema({
     title: {
         type:'String'
     },
     content:{
         type:'String'
     },
     author: {
         type:'String'
     },
     createdat: {
         type:'Date',default:Date.now
     },
     verified: {
         type:'Boolean',default:false
     },
     category:{
        type:mongoose.Schema.Types.ObjectId,    
        ref:"category"
     }
});

 module.exports = mongoose.model('blogpost',blog);


var blogmodel = require('../model/blogmodel');
const categorymodel = require('../model/categorymodel');
const storage = require('node-persist');

// add blog=========================================================================================================
exports.addblog = async (req,res) =>{
    var data = await blogmodel.create(req.body);
    // var categorymodel = await categorymodel.findById(id)
    var category = await categorymodel.findById(id)

      if(category.length > 0)
      {
        var data = await blogmodel.create(req.body);
        res.status(200).json({
             status:"Success",
             data
        })
      }
 }


// verified blog========================================================================================================
exports.verifiedblog = async(req,res) => {
    var verifiedblog = await  blogmodel.find({verified:true});
    if(verifiedblog.length > 0){
        res.status(200).json({
            verifiedblog
        })
    } 
    else{
        res.status(200).json({
            status:"ERROR"
        });
    }
}   

// unverified blog===================================================================================================
exports.unverifiedblog = async(req,res) => {
    var unverifiedblog = await blogmodel.find({verified:false});
    if(unverifiedblog.length > 0){
        res.status(200).json({
            unverifiedblog
        });
    }
    else{
        res.status(200).json({
            status:"ERROR"
        });
    }
}

var loginmodel = require('../model/adminmodel');
var blogmodel = require('../model/blogmodel');
var blogermodel = require('../model/bloggermodel');
var categorymodel = require('../model/categorymodel')
const storage = require('node-persist');

// admin login========================================================================================================
exports.login = async (req,res) => {
   
        var data = await loginmodel.find({email:req.body.email});

        await storage.init(  );
        var login_data = await storage.getItem('login_data')
       
        if(login_data == undefined)
        {
         if(data.length == 1)
          {
            if(req.body.password == data[0].password )
             {
                await storage.init();
                await storage.setItem('login_data',data[0].id)
                  res.status(200).json({
                    status:"Admin Login Successfully"
                  }) 
             }
             else{
                res.status(200).json({
                    status:"Check Your Password"
                })
             }
         }
         else
         {
            res.status(200).json({
                status:"Check Your Email Address"
            })
         }
       }
       else
       {
        res.status(200).json({
            status:"Admin Is Already Login"
        })
       }
  
}

// view blog========================================================================================================
exports.viewblog = async(req,res) =>{
  var data = await blogmodel.create(req.body);
  if(data.length > 0){
    res.status(200).json({
      status:"Error"
    });
  }
  else{
    res.status(200).json({
      data
    });
  }
}

// verifed post======================================================================================================
exports.verified = async(req,res) => {
  const id = req.params.id;
  var post = await blogmodel.findByIdAndUpdate(id,req.body);
  if(!post)
  {
    res.status(200).json({
      status:"post not found"
    });
  }
  else{
    res.status(200).json({
      post
    })
  }
}

// blogger verification==============================================================================================
// manage blogger====================================================================================================
// update
exports.updateblogger = async (req,res) =>{
  id = req.params.id;
  var update_data = await blogermodel.findByIdAndUpdate(id,req.body);
  res.status(200).json({
    status:"updated success",
    update_data
  })
};
exports.deletebloger = async (req,res) =>{
  var id = req.params.id;
  var data = await blogermodel.findByIdAndDelete(id);
  res.status(200).json({
      status:"Deleted"
  })
};

// add category========================================================================================================
exports.category = async (req,res) => {
  var data = await categorymodel.create(req.body);
     if(data.length > 0){
     res.status(200).json({
        status:"category already existe",
        
      }) 
     }
      else {
        res.status(200).json({
          status:"Success",
          data
     })
 }
}


// delete blog========================================================================================================
exports.deleteblog = async (req,res) =>{
  var id = req.params.id;
  var data = await blogmodel.findByIdAndDelete(id);
  res.status(200).json({
      status:"deleted blog"
  })
};


// logout========================================================================================================
exports.logout = async (req,res) =>{
  await storage.init();
  await storage.clear();
   res.status(200).json({
          status:"Logout"
    });
}
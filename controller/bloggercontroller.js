var blogmodel = require('../model/blogmodel');
var blogermodel = require('../model/bloggermodel');
const storage = require('node-persist');

// blogger registration==================================================================================================
exports.register = async (req,res) =>{
    var existuser = await blogermodel.find({email : req.body.email});
    if(existuser.length >0){
        res.status(200).json({
            status : 'user already exist',   
        });
    }
    else{
        var data = await blogermodel.create(req.body);
        res.status(200).json({
            status : 'data inserted successfully',
            data
        });
    }
};
// blogger login========================================================================================================
exports.login = async (req,res) => {
   
        var data = await blogermodel.find({email:req.body.email});

        await storage.init(  );
        var login_data = await storage.getItem('login_data')
       
        if(login_data == undefined)
       {
         if(data.length == 1)
         {
             if(req.body.password == data[0].password )
             {
                await storage.init(  );
                await storage.setItem('login_data',data[0].id)
                  res.status(200).json({
                    status:"blogger Login Successfully"
                  })
             }
             else{
                res.status(200).json({
                    status:"Check Your Email or Password"
                })
             }
         }
         else
         {
            res.status(200).json({
                status:"Check Your Email or Password"
            })
         }
       }
       else
       {
        res.status(200).json({
            status:"blogger Is Already Login"
        })
       }
}
// manage blogger====================================================================================================
// update
  exports.updateblog = async(req,res) => {
    id = req.params.id;
    var update_data = await blogmodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({  
      status:"updated success",
      update_data
    })
  }
  exports.deleteblog = async (req,res) =>{
    var id = req.params.id;
    var data = await blogmodel.findByIdAndDelete(id);
    res.status(200).json({
        status:"Deleted"
    })
  };
// blogger logout========================================================================================================
exports.logout = async (req,res) =>{
  await storage.init();
  await storage.clear();
   res.status(200).json({
          status:"Logout"
    });
   }
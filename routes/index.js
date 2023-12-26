var express = require('express');
var router = express.Router();

const admin  = require('../controller/admincontroller');
const blogger  = require('../controller/bloggercontroller');
const blog = require('../controller/blogcontroller');

// admin login-=======================================================================================================
router.post('/adminlogin',admin.login)
router.get('/adminlogout',admin.logout)

// blogger register/login=============================================================================================
router.post('/bloggerregister',blogger.register)
router.post('/bloggerlogin',blogger.login)
router.get('/bloggerlogout',blogger.logout)

//add categery/admin================================================================================================== 
router.post('/category',admin.category)

// add blog===========================================================================================================
router.post('/addblog',blog.addblog)
router.get('/deleteblog/:id',admin.deleteblog)

// view blog /verified================================================================================================
router.get('/viewblog',admin.viewblog)
router.post('/post/:id/verified',admin.verified)
router.get('/post/verifiedblog',blog.verifiedblog)
router.get('/post/unverifiedblog',blog.unverifiedblog)

//admin said blogger verifiction======================================================================================
// admin said blogger manage==========================================================================================
router.post('/updateblogger/:id',admin.updateblogger)
router.get('/deletebloger/:id',admin.deletebloger)

// bloger side blog mange============================================================================================
router.post('/updateblog/:id',blogger.updateblog)
router.get('/deleteblog/:id',blogger.deleteblog)

module.exports = router;

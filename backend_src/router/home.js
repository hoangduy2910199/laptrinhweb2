homeCtr=require('../apiControllers/homeController');
var express=require('express');
var router=express.Router();
router.get('/',homeCtr.home);
router.get('/load',homeCtr.load);
module.exports=router;
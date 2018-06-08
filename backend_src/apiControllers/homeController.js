var express=require('express');
var product=require('../Model/Product');
var app=express();
var router=express.Router();
router.get('/',function (req,res) {
    var conn=DB.conn;
    product.find().then(function (result) {
        console.log(result);
        res.sendFile('index.html',{root:'./views'});
    }).catch(function(err)
    {
        console.log(err);
    });

});
module.exports=router;
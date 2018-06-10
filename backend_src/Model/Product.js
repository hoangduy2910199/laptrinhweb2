var mon=require('mongoose');
var productSchema=mon.Schema({
   _pro_name:String,
   _start_date:Date,
   _end_date:Date,
    _price:Number,
    _best_price:Number,
    _image:Array

});
var Product=mon.model('Products',productSchema);
module.exports=Product;
var mon=require('mongoose');
var productSchema=mon.Schema({
   _pro_name:String,
   _start_date:String,
   _end_date:String,
    _price:Number,
    _best_price:Number

});
var Product=mon.model('Products',productSchema);
module.exports=Product;
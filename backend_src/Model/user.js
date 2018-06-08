var mon=require('mongoose');
var userSchema=mon.Schema({
   _userName:String,
    _pass:String
});
module.exports=mon.model('user',userSchema);
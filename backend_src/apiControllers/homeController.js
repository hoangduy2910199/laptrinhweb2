var DB=require('../fn/DB_connect');
var product=require('../Model/Product');
var user=require('../Model/user')
var mon=require('mongoose');
var date_time=require('date-and-time');
var d=new Date();

exports.home=function(req,res) {
    res.sendFile('index.html',{root:'./views'});
};
exports.load=function (req,res) {
    mon.connect(DB);
    var rs;
    var conn=mon.connection;
    conn.on('connected',function () {
        console.log('connected');
        console.log(d);
    });
    conn.on('error',function (err) {
        console.log(err) ;
    });
    product.find({_end_date:{$gt:d}}).sort({_end_date:-1}).then(function (rs1) {
        console.log(rs1);
        res.json(rs1);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
        res.end();
    });
};
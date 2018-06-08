var mon=require('mongoose');
mon.connect('mongodb://root:root123456@cluster0-shard-00-00-4vox4.mongodb.net:27017,cluster0-shard-00-01-4vox4.mongodb.net:27017,cluster0-shard-00-02-4vox4.mongodb.net:27017/Auction?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
var conn= mon.connection;
conn.on('connected',function () {
   console.log('connected');
});
conn.on('error',function (err) {
   console.log(err) ;
});
module.exports=conn;
var express = require('express'),
	bodyParser = require('body-parser')
	morgan = require('morgan')
	cors = require('cors');
	Product=require('./Model/Product');
	DB=require('./fn/DB_connect');
	router=require('./router/home');


var app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/public',express.static('./views/public'));
app.use('/handle',express.static('./views/handle'));
app.use('/',router);

app.listen(3000, function() {
	console.log('API running on port 3000');
});
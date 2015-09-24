var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var ejs = require('ejs');

var testcase = require('./routes/router.js');
var xsspayload = require('./routes/routerxsspayloads.js');
var sito = require('./routes/routersito.js');

var xsspwm = require('./models/xsspwm.js');


var mongoose = require('mongoose');
mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://127.0.0.1:27017", function(err) {
    if(err) {
        console.log('connection error', err);
    }
});

// cors
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser());

// In questo modo posso fare delle mini-app, 
// attacco il router delle partite sotto la radice /games

app.use(function(err,req,res,next){
        console.log(err.stack);
console.log("ciao");
	res.status(200).send('ciao');

});



app.use('/testcase', testcase);
app.use('/xsspayload', xsspayload);
app.use('/sito', sito);
app.set('views','./views');
app.set('view engine','ejs');

process.on('uncaughtException', function (err) {
 	console.log(err);
	
});
 
var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "192.168.233.128"; // Listening to localhost if you run locally


var server=app.listen(port, address);
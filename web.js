var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var testcase = require('./routes/RouterTestCase.js');
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
app.use('/testcase', testcase);
 
var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "192.168.233.128"; // Listening to localhost if you run locally


var server=app.listen(port, address);
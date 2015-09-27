var express = require('express');
var router = express.Router();
var http = require('http');
var util=require('util');


/* GET /games listing. */
router.get('/', function(req, res, next) {
	console.log("GET SITO");
     
    res.render('home.ejs',{campo1:"",campo2:""});
    //res.send('<html>' + req.body.email + req.body.password + '</html>');
});

/* POST /games */
router.post('/', function(req, res, next) {
    console.log("POST SITO");
    //console.log(util.inspect(req));
    console.log(req.body);
    //res.render('home.ejs',{campo1: req.body.email,campo2:req.body.password});
    res.send('<html>' + req.body.email + req.body.password + '</html>');	

});



module.exports = router;
var express = require('express');
var router = express.Router();
var http = require('http');
var util = require('util');
var request = require('request');

var mongoose = require('mongoose');
var TestCase = require('../models/xsspwm.js');


/* GET /games listing. */
router.get('/', function(req, res, next) {
  console.log("GET");
  console.log(req.body);
  TestCase.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /games */
router.post('/', function(req, res, next) {
  TestCase.create(req.body, function (err, post) {
    console.log(req.body);
    if (err) { console.log(err); return next(err)};
console.log(post);
    res.json(post);
  });
});


/* GET /games/id */
router.get('/id=:id', function(req, res, next) {

console.log("con id"); console.log(req.params);

  TestCase.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* GET /games/id */
router.get('/ID_TestCase=:ID_TestCase', function(req, res, next) {

console.log("con ID_TestCase"); console.log(req.params);

  TestCase.find(req.params, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//
/* GET /getHTML/id= value */
router.get('/getHTML/url=:url', function(req, res, next) {

    console.log("get HTML con id"); console.log(req.params);

    var str = "";

    console.log ("elaboro sito " + req.params.url );
	
    console.log (util.inspect(req));
	        
    var risorsa = "";
    var options = {
	  url: req.params.url,
	  path: risorsa,
	query:req.query
    };

    callback = function(response) {
  

        response.on('data', function (chunk) {
	    str += chunk;
	});
	
	  //the whole response has been recieved, so we just print it out here
	response.on('end', function () {
	    
	   console.log("- inizio html -");
	   console.log(str);
	   res.send(str);	
	   console.log("- fine html -");
   
        });
    }

     http.request(req.params.url, callback).end();
});

/* POST /getHTML/id= value */
router.post('/getHTML/url=:url', function(req, res, next) {

    console.log("post HTML con id"); 
    //console.log(util.inspect(req));


    var str = "";

    console.log ("elaboro sito " + req.params.url );
	        
     
    var options = {
	  url: req.params.url,
          method:"POST",
          //json:true,
          body:req.body
	      };

    

    callback2 = function(err,response,body) {
  

	console.log("dentro callback2");
	console.log(JSON.stringify(response));
	res.send(body);

    }
    
     var parm={
	url: req.params.url,
	form: req.body
     }
     
     console.log(JSON.stringify(parm));
     request.post(parm,callback2);

});



	
/* GET /getHTML/ID_TestCase= value */
router.get('/getHTML/ID_TestCase=:ID_TestCase', function(req, res, next) {

     console.log("getHTML con ID_TestCase"); console.log(req.params);

     TestCase.find(req.params, function (err, post) {
    
     if (err) return next(err);


    next(caller.getHTML("www.calcitvaldarno.it"));
});  
});




/* PUT /games/:id */
router.put('/id=ex:id', function(req, res, next) {

	console.log(req.params);
  TestCase.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /games/:id */
router.delete('/id=:id', function(req, res, next) {
  TestCase.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* CANCELLA TUTTI */
/* DELETE /games */
router.delete('/', function(req, res, next) {
  TestCase.remove({}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
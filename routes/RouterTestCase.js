var express = require('express');
var router = express.Router();
var http = require('http');

var mongoose = require('mongoose');
var TestCase = require('../models/xsspwm.js');
var caller = require('../utils/caller.js');

/* GET /games listing. */
router.get('/', function(req, res, next) {
	console.log("1");
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
	        
    var risorsa = "";
    var options = {
	  host: req.params.url
,
	  path: risorsa
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

     http.request(options, callback).end();
});

	
/* GET /getHTML/ID_TestCase= value */
router.get('/getHTML/ID_TestCase=:ID_TestCase', function(req, res, next) {

     console.log("getHTML con ID_TestCase"); console.log(req.params);

     TestCase.find(req.params, function (err, post) {
    
     if (err) return next(err);

    // chiamo il caller con post ottengo un oggetto con l'html e lo rimando indietro 

    //caller.getHTML("www.calcitvaldano.it");
	

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
router.delete('/:id', function(req, res, next) {
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
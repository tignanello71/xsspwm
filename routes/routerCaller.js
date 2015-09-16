var express = require('express');
var router = express.Router();

var caller = require('../utils/caller.js');

var mongoose = require('mongoose');
var TestCase = require('../models/xsspwm.js');

/* GET /getHTML */
router.get('/', function(req, res, next) {

	console.log("not implement");
   
});


/* GET /getHTML/id= value */
router.get('/id=:id', function(req, res, next) {

    console.log("con id"); console.log(req.params);

    TestCase.findById(req.params.id, function (err, post) {
    
    if (err) return next(err);

    // chiamo il caller con post ottengo un oggetto con l'html e lo rimando indietro 	

    //caller.getHTML("www.yahoo.it");

    res.json(post);
    });  
});

/* GET /getHTML/ID_TestCase= value */
router.get('/ID_TestCase=:ID_TestCase', function(req, res, next) {

     console.log("con ID_TestCase"); console.log(req.params);

     TestCase.find(req.params, function (err, post) {
    
     if (err) return next(err);

    // chiamo il caller con post ottengo un oggetto con l'html e lo rimando indietro 

    //caller.getHTML("www.yahoo.it");
	

    res.json(post);
});  
});


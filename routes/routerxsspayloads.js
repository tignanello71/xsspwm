var express = require('express');
var router = express.Router();
var http = require('http');

var mongoose = require('mongoose');
var xsspayload = require('../models/xsspayloads.js');


/* GET /games listing. */
router.get('/', function(req, res, next) {
	console.log("1");
  xsspayload.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /games */
router.post('/', function(req, res, next) {
  xsspayload.create(req.body, function (err, post) {
    console.log(req.body);
    if (err) { console.log(err); return next(err)};
console.log(post);
    res.json(post);
  });
});


/* GET /games/id */
router.get('/id=:id', function(req, res, next) {

console.log("con id"); console.log(req.params);

  xsspayload.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* GET /games/id */
router.get('/keypayload=:keypayload', function(req, res, next) {

console.log("con ID_TestCase"); console.log(req.params);

  xsspayload.find(req.params, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//

 	

/* PUT /games/:id */
router.put('/id=:id', function(req, res, next) {
  
    console.log(req.params);
    xsspayload.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /games/:id */
router.delete('/id=:id', function(req, res, next) {
  xsspayload.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* CANCELLA TUTTI */
/* DELETE /games */
router.delete('/', function(req, res, next) {
  xsspayload.remove({}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
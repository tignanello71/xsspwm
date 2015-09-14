var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var TestCase = require('../models/xsspwm.js');

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
router.get('/:id', function(req, res, next) {
  TestCase.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /games/:id */
router.put('/:id', function(req, res, next) {
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
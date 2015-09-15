var mongoose = require('mongoose');


var TestCase = new mongoose.Schema({

ID_TestCase: String,
txt_nomeFile: String,
lastUpdate: Date,
lines: [String]

});

module.exports = mongoose.model('TestCase', TestCase);



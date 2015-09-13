var mongoose = require('mongoose');


var TestCase = new mongoose.Schema({
ID_TestCase: Number,
txt_nomeFile: String,
lastUpdate: Date

});
module.exports = mongoose.model('TestCase', TestCase);

var URLs = new mongoose.Schema({
ID_URL: Number,
ID_TestCase: Number,
txtURL: String

});

module.exports = mongoose.model('URLs', URLs);

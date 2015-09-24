var mongoose = require('mongoose');

var xsspayload = new mongoose.Schema({

keypayload : String,
payload: String

});

module.exports = mongoose.model('XssPayloads', xsspayload);

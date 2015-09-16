var http = require('http');
var util = require('util');

var sito = "";
var risorsa = "";
var target = ""; 

//We need a function which handles requests and send response
exports.getHTML = function (urlsite){
	
	console.log("request url -> " + urlsite);
	
        var str = "";
	var options = {
	  host: urlsite,
	  path: risorsa
	};
	
	callback = function(response) {
	  
	
	  response.on('data', function (chunk) {
	    str += chunk;
	  });
	
	  //the whole response has been recieved, so we just print it out here
	  response.on('end', function () {
	    
           console.log("- inizio html -");
	   //console.log(str);
		
	   console.log("- fine html -");
           return str;
	   
	  });
	}
	
	http.request(options, callback).end();
		
}








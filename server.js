var http = require('http');
var url = require('url');

function start(route,handle){
	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;
		var postData = "";
		console.log("Request received");
		console.log("Request for "+pathname);
		
		req.addListener("data", function(postDataChunk){
			postData += postDataChunk;
		});
		req.addListener("end",function(){
			route(handle,pathname,res,postData);			
		});
		
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
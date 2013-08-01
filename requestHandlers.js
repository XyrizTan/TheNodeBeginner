// var exec = require("child_process").exec;
var qs = require("querystring");
var showpage = require("./showPage");
function start(res,postData) {
	console.log("Request handler 'start' was called.");
	// exec("ls -lah", function (error, stdout, stderr) { 
		// 	res.writeHead(200,{ "Content-Type" : "text/html" });
		// 	res.write(stdout);
		// 	res.end();;
		// }); 
		showpage.show(res,"index.html");
		
	}
	
function upload(res,postData){
	console.log("Upload is called!");
	res.writeHead(200,{ "Content-Type" : "text/html" });
	res.write("You sent "+qs.parse(postData).text);
	res.end();
}

exports.start = start;
exports.upload = upload;
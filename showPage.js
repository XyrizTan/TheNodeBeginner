var fs = require("fs");
function show (res,page){
	fs.readFile('./'+page, function (err, data) {
		if (err) throw err;
		console.log(data);
		res.writeHead(200, { "Content-Type" : "text/html" });
		res.write(data)
		res.end();
	});
}

exports.show = show;
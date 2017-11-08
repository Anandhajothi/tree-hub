//#! /usr/bin/env node
var fs = require('fs');

var walktree = function(dir) {
	var files = fs.readdirSync(dir);

	files.forEach(function(file) {
	var fileInfo = fs.statSync(dir + '/' + file)
		console.log(file);

		if(fileInfo.isDirectory()) {
			walktree(dir + '/' + file);
		}
	});
}

walktree(process.cwd());

module.exports = function (directory,filter,callback){
	var fs = require('fs');
	var path = require('path');
	
	var dir = directory;	
	var fil = "."+filter;
	
	fs.readdir(dir, function(err,data){
		if(err) return callback(err);
		
		var list = data.filter(function(file){
			if(path.extname(file) == fil)
				return true;
		});
		
		return callback(null,list);
	});
	
};
var fs = require('fs')
var path = require('path')

module.exports = function (folder,ext,callback){
	fs.readdir(folder, function (err, files) {
	if (err) 
		return callback(err);

	files = files.filter(function(file){
		if(path.extname(file) === '.' + ext)return true;	
	});
	
	return callback(null,files);

   	 });

};
    

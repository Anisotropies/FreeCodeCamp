var myReadDirModule = require('./Exercise6Module.js');

var folder = process.argv[2]
var ext = process.argv[3]

myReadDirModule(folder,ext,function(err,filteredFiles){
	if(err)
		return err;
	filteredFiles.forEach(function(fileName)
	{
		console.log(fileName);
	});
});


   
   

var fs = require('fs');
fs.readdir(process.argv[2],function (err,files){
	if(err)
		return console.log("ERROR!");
	var fileNames = [];
	for(var i = 0; i<files.length; i++)
	{
		if(files[i].split('.')[1]==process.argv[3])
			fileNames.push(files[i]);
	}	
	fileNames.forEach(function(element) {
	  console.log(element);
	});
});



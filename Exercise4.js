 var fs = require('fs');
var fileString = fs.readFile(process.argv[2],function (err,data){
if(err)
	console.log("ERROR!");
var countNL = data.toString().split('\n').length;
console.log(countNL-1);
});



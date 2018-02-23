 var fs = require('fs');
var fileString = fs.readFileSync(process.argv[2],'utf-8');
var countNL = -1;
var fileStringSplit = fileString.split("\n");
countNL+=fileStringSplit.length;
console.log(countNL);

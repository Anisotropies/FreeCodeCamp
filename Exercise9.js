var http = require('http');
var bl = require('bl');
var url0 = process.argv[2];
var url1 = process.argv[3];
var url2 = process.argv[4];

var data0;
var data1;
var data2;
var countCallback = 0;

http.get(url0, function(res) {
	res.pipe(bl(function(err,data){
	if (err) 
		return err;	
	countCallback++;
	data0 = data.toString();
	if(countCallback==3)
	{
		console.log(data0);
		console.log(data1);
		console.log(data2);
	}
	}));
});

http.get(url1, function(res) {
	res.pipe(bl(function(err,data){
	if (err) 
		return err;	
	countCallback++;
	data1 = data.toString();
	if(countCallback==3)
	{
		console.log(data0);
		console.log(data1);
		console.log(data2);
	}
	}));
});

http.get(url2, function(res) {
	res.pipe(bl(function(err,data){
	if (err) 
		return err;	
	countCallback++;
	data2 = data.toString();
	if(countCallback==3)
	{
		console.log(data0);
		console.log(data1);
		console.log(data2);
	}
	}));
});



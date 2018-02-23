var net = require('net');

function zeroPadding(nb){
	return (nb<10)?('0'+nb):(nb);
}

var server = net.createServer(function(socket){
	var date  = new Date();
	var output = 
date.getFullYear()
	+'-'+zeroPadding((date.getMonth()+1))
	+'-'+zeroPadding(date.getDate())
	+' '+zeroPadding(date.getHours())
	+':'+zeroPadding(date.getMinutes());

	socket.end(output+'\n');
});

server.listen(Number(process.argv[2]));


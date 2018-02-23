var net = require('net');

var server = net.createServer(
	function listener(socket){
 		var date = new Date();
		var data = "";
		var month = "";
		var day = "";
		var hour = "";
		var minute = "";
		if(date.getMonth()<10)
			{
			month+="0";
			month+=date.getMonth()+1;
			}
		else
			month = date.getMonth()+1;
	if(date.getDate()<10)
			{
			day+="0";
			day+=date.getDate();
			}
		else
			day = date.getDate();
if(date.getHours()<10)
			{
			hour+="0";
			hour+=date.getHours();
			}
		else
			hour = date.getHours();
if(date.getMinutes()<10)
			{
			minute+="0";
			minute+=date.getMinutes();
			}
		else
			minute = date.getMinutes();
		data = date.getFullYear()+"-"+month+"-"+day+" "+hour+":"+minute;

		//write data
		//close socket
	
	socket.end(data+'\n');
	}
);

server.listen(process.argv[2])

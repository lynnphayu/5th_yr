// http server
// var express = require('express');
// var app = require('express')();
// var server = require('http').Server(app);
// var ip = require('ip');
// server.listen(8080, function() {
//     console.log('HTTP listening on' + ip.address() + ':' + 8080);
// });
// app.use(express.static('public'));

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });
// http server

// signalling server
var io = require('socket.io')(3030);
var clients = []; 

io.on('connection', function(socket) {
	clients.push({id :socket.id,
				name : socket.handshake.query.name
			});
	socket.emit('client_list', {clients: clients});

	console.log(socket.id); 
	socket.broadcast.emit('new_client', { id : socket.id, name : 'lynnphayu' });
	socket.on('disconnect', function(){
		socket.broadcast.emit('client_disconnect', { id : socket.id })
	})
});

// signalling server
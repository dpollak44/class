const net = require('net');

let sockets = [];
let conversation = '';

net.createServer(socket => {
    //console.log('got connection');
    /*socket.on('data', data => {
        socket.write(data);
    });*/

    //socket.pipe(socket);

    sockets.push(socket);
    socket.write(conversation);

    socket.on('data', data => {
        conversation += data;
        sockets.filter(s => s !== socket).forEach(s => s.write(data));
    });

    socket.on('end', () => {
        sockets = sockets.filter(s => s !== socket);
    });

}).listen(81);
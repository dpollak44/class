const net = require('net');

net.createServer(socket => {
    const now = new Date();
    // 2013-07-06 17:42
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    socket.end(`${year}-${month}-${day} ${hours}:${minutes}\n`);
}).listen(process.argv[2]);
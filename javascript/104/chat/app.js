const express = require('express');
const app = express();
const server = require('http').Server(app);
var socketIo = require('socket.io')(server);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


let chatters = [];
socketIo.on('connection', socket => {
  let name;

  socket.on('login', (login, callback) => {
    const loginName = login.trim();
    if (!loginName.length) {
      return callback('Login name is required');
    }
    if (chatters.find(chatter => chatter === loginName)) {
      return callback('Login name is already used. Please choose another');
    }

    name = login;
    chatters.push(name);

    callback();

    socket.on('message', message => {
      socketIo.emit('message', { name: name, msg: message });
    });
  });


});



server.listen(80);
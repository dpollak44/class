/*global $*/
(function () {
  const socketIo = io();
  const messageInput = $('#message');
  const messages = $('#messages');

  const loginForm = $('#loginForm');
  loginForm.submit(e => {
    e.preventDefault();
    socketIo.emit('login', $('#name').val(), callbackData => {
      if (callbackData) {
        $('#error').text(callbackData);
      } else {
        loginForm.slideUp();
        $('#messageContainer').slideDown();
      }
    });
  });

  $('#messageForm').submit(e => {
    e.preventDefault();
    socketIo.emit('message', messageInput.val());
  });

  socketIo.on('message', message => {
    messages.append(`<div>${message.name} says: ${message.msg}</div>`);
  });
}());
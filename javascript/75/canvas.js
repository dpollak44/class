(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    context.fillStyle = 'yellow';
    context.fillRect(50, 50, 100, 100);

    context.strokeStyle = 'black';
    context.strokeRect(50, 50, 100, 100);

    context.beginPath();
    context.moveTo(175, 50);
    context.lineTo(200, 75);
    context.lineTo(200, 25);
    context.stroke();
    //context.fillStyle = 'red';
    //context.fill();

    context.beginPath();
    context.moveTo(275, 50);
    context.lineTo(300, 75);
    context.lineTo(300, 25);
    context.stroke();
    //context.fillStyle = 'red';
    //context.fill();

    context.beginPath();
    //context.arc(400, 400, 20, 0, 2 * Math.PI, false);
    context.arc(400, 400, 20, 0, 3.14, false);
    //context.stroke();
    context.fillStyle = 'red';
    context.fill();
}());
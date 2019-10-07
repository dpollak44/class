(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const radius = 10;
    let x = radius;
    let y = radius;
    let dx = 2;
    let dy = 2;

    function resizeCanvas() {
        canvas.width = window.innerWidth - 2;
        canvas.height = window.innerHeight - 2;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function drawBall() {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = 'blue';
        context.fill();
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawBall();

        x += dx;
        y += dy;

        if (x < radius || x >= canvas.width - radius) {
            dx = -dx;
        }

        if (y < radius || y >= canvas.height - radius) {
            dy = -dy;
        }
    }

    setInterval(draw, 10);
}());
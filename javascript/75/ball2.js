(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    class Ball {
        constructor(radius, color, speed, context) {
            this.radius = radius;
            this.x = radius;
            this.y = radius;
            this.color = color;
            this.dx = speed;
            this.dy = speed;
            this.context = context;
        }

        move() {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x < this.radius || this.x >= canvas.width - this.radius) {
                this.dx = -this.dx;
            }

            if (this.y < this.radius || this.y >= canvas.height - this.radius) {
                this.dy = -this.dy;
            }

            this.draw();
        }

        draw() {
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.fillStyle = this.color;
            context.fill();
        }
    }



    function resizeCanvas() {
        canvas.width = window.innerWidth - 2;
        canvas.height = window.innerHeight - 2;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ballColor = document.getElementById('ballColor');
    const ballSpeed = document.getElementById('ballSpeed');
    const ballRadius = document.getElementById('ballRadius');
    document.getElementById('addBall').addEventListener('click', () => {
        balls.push(new Ball(parseInt(ballRadius.value, 10), ballColor.value, parseInt(ballSpeed.value, 10), context));
    });

    const balls = [];
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        balls.forEach(ball => ball.move());
    }, 10);
}());
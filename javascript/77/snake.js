(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const PART_SIZE = 64;
    const snakeHeadImage = new Image();
    const appleImage = new Image();
    const crashSound = document.getElementById('crashSound');
    const crunchSound = document.getElementById('crunchSound');
    let snake;
    let apple;
    let speed = 300;
    let gameOver = false;
    let score = 0;

    function resizeCanvas() {
        canvas.width = (window.innerWidth - 2) - (window.innerWidth - 2) % PART_SIZE;
        canvas.height = (window.innerHeight - 2) - (window.innerHeight - 2) % PART_SIZE;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Snake {
        constructor() {
            this.x = -PART_SIZE;
            this.y = 0;
            this.direction = 'ArrowRight';

            document.addEventListener('keydown', keyEvent => {
                switch (keyEvent.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                    case 'ArrowLeft':
                    case 'ArrowRight':
                        this.direction = event.key;
                }
            });
        }

        move() {
            let x = this.x;
            let y = this.y;

            switch (this.direction) {
                case 'ArrowUp':
                    y = this.y - PART_SIZE;
                    break;
                case 'ArrowDown':
                    y = this.y + PART_SIZE;
                    break;
                case 'ArrowLeft':
                    x = this.x - PART_SIZE;
                    break;
                case 'ArrowRight':
                    x = this.x + PART_SIZE;
                    break;
            }

            if (x < 0 || x > canvas.width - PART_SIZE ||
                y < 0 || y > canvas.height - PART_SIZE) {
                gameOver = true;
            }

            if (!gameOver) {
                this.x = x;
                this.y = y;
            } else {
                crashSound.currentTime = 0;
                crashSound.play();
            }

            if (apple) { // in case apple not loaded yet
                if (this.x === apple.x && this.y === apple.y) {
                    crunchSound.currentTime = 0;
                    crunchSound.play();
                    ++score;
                    speed = speed * 0.9;
                    apple = new Apple();
                }
            }

            this.draw();
        }

        draw() {
            context.drawImage(snakeHeadImage, this.x, this.y, PART_SIZE, PART_SIZE);
        }
    }

    class Apple {
        constructor() {
            this.x = Apple.getRandomNumber(canvas.width - PART_SIZE);
            this.y = Apple.getRandomNumber(canvas.height - PART_SIZE);
        }

        draw() {
            context.drawImage(appleImage, this.x, this.y, PART_SIZE, PART_SIZE);
        }

        static getRandomNumber(max) {
            let r = Math.floor(Math.random() * (max + 1));
            return r - r % PART_SIZE;
        }
    }

    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (apple) { // in case apple image not yet loaded
            apple.draw();
        }
        snake.move();
        context.fillStyle = 'red';
        context.font = 'bold 48px serif';
        context.fillText(score, canvas.width - 100, 40);
        if (!gameOver) {
            setTimeout(gameLoop, speed);
        }
    }

    snakeHeadImage.src = "images/snakehead.png";
    snakeHeadImage.addEventListener('load', () => {
        snake = new Snake();
        gameLoop();
    });

    appleImage.src = "images/apple.png";
    appleImage.addEventListener('load', () => {
        apple = new Apple();
    });
}());
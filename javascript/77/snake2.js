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
            this.segments = [{ x: -PART_SIZE, y: 0 }];
            this.direction = 'ArrowRight';

            document.addEventListener('keydown', keyEvent => {
                switch (keyEvent.key) {
                    case 'ArrowUp':
                        if (this.segments.length === 1 || this.direction !== 'ArrowDown') this.direction = event.key; break;
                    case 'ArrowDown':
                        if (this.segments.length === 1 || this.direction !== 'ArrowUp') this.direction = event.key; break;
                    case 'ArrowLeft':
                        if (this.segments.length === 1 || this.direction !== 'ArrowRight') this.direction = event.key; break;
                    case 'ArrowRight':
                        if (this.segments.length === 1 || this.direction !== 'ArrowLeft') this.direction = event.key; break;
                }
            });
        }

        move() {
            let head = this.segments[0];
            let tail = this.segments.pop(); //chop off tail
            let oldTailX = tail.x;
            let oldTailY = tail.y;
            let x = head.x;
            let y = head.y;

            switch (this.direction) {
                case 'ArrowUp':
                    y = head.y - PART_SIZE;
                    break;
                case 'ArrowDown':
                    y = head.y + PART_SIZE;
                    break;
                case 'ArrowLeft':
                    x = head.x - PART_SIZE;
                    break;
                case 'ArrowRight':
                    x = head.x + PART_SIZE;
                    break;
            }

            if (x < 0 || x > canvas.width - PART_SIZE ||
                y < 0 || y > canvas.height - PART_SIZE) {
                gameOver = true;
            }

            // check if hit self - cant hit first 3 spots or tail (which is about to move away)
            if (this.segments.slice(4, this.segments.length - 1).some(s => s.x === x && s.y === y)) {
                gameOver = true;
            }

            if (!gameOver) {
                this.segments.unshift(tail); // add old tail as new head
                tail.x = x; // in new position
                tail.y = y;
            } else {
                this.segments.push(tail); // put tail back
                crashSound.currentTime = 0;
                crashSound.play();
            }

            if (apple) { // in case apple not loaded yet
                if (head.x === apple.x && head.y === apple.y) {
                    crunchSound.currentTime = 0;
                    crunchSound.play();
                    ++score;
                    speed = speed * 0.9;

                    this.segments.push({ x: oldTailX, y: oldTailY });

                    apple = new Apple();
                }
            }

            this.draw();
        }

        draw() {
            context.drawImage(snakeHeadImage, this.segments[0].x, this.segments[0].y, PART_SIZE, PART_SIZE);
            for (let i = 1; i < this.segments.length; i++) {
                context.fillStyle = 'green';
                context.fillRect(this.segments[i].x, this.segments[i].y, PART_SIZE, PART_SIZE);
            }
        }
    }

    class Apple {
        constructor() {
            do { // keep picking random x,y as long as x,y chosen is under any segment of snake
                this.x = Apple.getRandomNumber(canvas.width - PART_SIZE);
                this.y = Apple.getRandomNumber(canvas.height - PART_SIZE);
            } while (snake.segments.some(s => s.x === this.x && s.y === this.y));
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
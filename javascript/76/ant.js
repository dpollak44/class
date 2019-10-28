(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const ANT_SIZE = 2;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Ant {
        constructor(theContext, color, speed) {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.context = theContext;
            this.color = color;
            this.speed = speed;
            this.brains = 0;
            this.draw();
        }

        move(timeDelta) {
            // this.context.clearRect(this.x - 1, this.y - 1, 3, 3);

            // console.log((Ant.getRandomNumber(-1, 1) * (timeDelta * 0.01)));

            if (--this.brains <= 0) {
                this.brains = Ant.getRandomNumber(1, 100);
                this.moveX = Ant.getRandomNumber(-1, 1);
                this.moveY = Ant.getRandomNumber(-1, 1);
            }

            // this.x += (Ant.getRandomNumber(-1, 1) * (timeDelta * this.speed));
            // this.y += (Ant.getRandomNumber(-1, 1) * (timeDelta * this.speed));

            this.x += (this.moveX * (timeDelta * this.speed));
            this.y += (this.moveY * (timeDelta * this.speed));

            if (this.x < 0) {
                this.x = 0;
            } else if (this.x > canvas.width - ANT_SIZE) {
                this.x = canvas.width - ANT_SIZE;
            }

            if (this.y < ANT_SIZE) {
                this.y = 0;
            } else if (this.y > canvas.height - ANT_SIZE) {
                this.y = canvas.height - ANT_SIZE;
            }

            this.draw();
        }

        draw() {
            this.context.fillStyle = this.color;
            this.context.fillRect(this.x, this.y, ANT_SIZE, ANT_SIZE);
        }

        static getRandomNumber(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
    }

    //const ant = new Ant(context);
    // ant.draw();

    const ants = [];
    /*for (let i = 0; i < 1000; i++) {
        ants.push(new Ant(context));
    }*/

    const amountInput = document.getElementById('amount');
    const colorInput = document.getElementById('color');
    const speedInput = document.getElementById('speed');

    document.getElementById('add').addEventListener('click', () => {
        for (let i = 0; i < amountInput.value; i++) {
            ants.push(new Ant(context, colorInput.value, parseFloat(speedInput.value, 10)));
        }
    });

    /*setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        //ant.move();
        ants.forEach(ant => ant.move());
    }, 17);*/

    let lastTimeStamp;
    function drawAnts(timestamp) {
        if (!lastTimeStamp) {
            lastTimeStamp = timestamp;
        }
        const timeDelta = timestamp - lastTimeStamp;
        // console.log(lastTimeStamp, timestamp, timeDelta);

        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move(timeDelta));

        lastTimeStamp = timestamp;
        requestAnimationFrame(drawAnts);
    }

    requestAnimationFrame(drawAnts);
}());
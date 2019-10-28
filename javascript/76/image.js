(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    //const img = document.getElementById('theImage');

    // img.addEventListener('load', e => {
    //console.log(e);
    // context.drawImage(img, 0, 0);
    //});

    const SNAKE_SIZE = 64;
    let direction = 'ArrowRight';
    let x = -SNAKE_SIZE;
    let y = 0;
    const img2 = new Image();
    img2.src = "images/snakehead.png";
    //setTimeout(() => {
    //context.drawImage(img2, 250, 250);
    //}, 1000);
    img2.addEventListener('load', () => {
        setInterval(() => {
            context.clearRect(x, y, SNAKE_SIZE, SNAKE_SIZE);
            switch (direction) {
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
            }

            context.drawImage(img2, x, y, SNAKE_SIZE, SNAKE_SIZE);
        }, 200);
    });
    img2.addEventListener('error', () => {
        context.strokeText('OOPS', 250, 250);
    });


    document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                direction = event.key;
        }
    });

}());
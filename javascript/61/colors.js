(function () {
    'use strict';

    let intervalId;
    /*
    let i = 0;
    const colors = ['red', 'green', 'blue'];
    function startColors() {
        intervalId = setInterval(() => {
            document.body.style.color = colors[i++];
            if (i >= colors.length) {
                i = 0;
            }
            document.body.style.backgroundColor = colors[i];
        }, 1000);
    }*/

    function getColorPart() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
        const r = getColorPart();
        const g = getColorPart();
        const b = getColorPart();

        return `rgb(${r},${g},${b})`;
    }

    function setColors(color, backgroundColor) {
        document.body.style.color = color;
        document.body.style.backgroundColor = backgroundColor;
    }

    const colorTable = get('colorTable');
    function addColorRow(color, backgroundColor) {
        const row = colorTable.insertRow();
        const timeCell = row.insertCell();
        const colorCell = row.insertCell();
        const backgroundColorCell = row.insertCell();

        timeCell.innerHTML = new Date().toLocaleString();
        colorCell.innerHTML = color;
        backgroundColorCell.innerHTML = backgroundColor;

        row.addEventListener('click', () => {
            stopColors();
            setColors(color, backgroundColor);
        });
    }

    function startColors() {
        control.innerHTML = 'stop';

        intervalId = setInterval(() => {
            const color = getRandomColor();
            const backgroundColor = getRandomColor();

            setColors(color, backgroundColor);

            addColorRow(color, backgroundColor);
        }, 1000);
    }

    /*
    let r = 0;
    let g = 0;
    let b = -1;
    function startColors() {
        /*for (let r = 0; r < 256; r++) {
            for (let g = 0; g < 256; g++) {
                for (let b = 0; b < 256; b++) {
                    console.log(r, g, b);
                }
            }
        }* /
        intervalId = setInterval(() => {
            b += 10;
            if (b > 255) {
                b = 0;

                g += 10;
                if (g > 255) {
                    g = 0;

                    r += 10;
                    if (r > 255) {
                        r = 0;
                    }
                }
            }

            document.body.style.color = `rgb(${r},${g},${b})`;
            document.body.style.backgroundColor = `rgb(${b},${g},${r})`;

            console.log(r, g, b);
        }, 1000);
    }*/

    function stopColors() {
        clearInterval(intervalId);
        intervalId = 0;
        control.innerHTML = 'start';
    }

    function get(id) {
        return document.getElementById(id);
    }

    const control = get('control');
    control.addEventListener('click', function () {
        if (!intervalId) {
            startColors();
        } else {
            stopColors();
        }
    });

}());
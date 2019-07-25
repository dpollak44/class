(function () {
    'use strict';

    /*let h = 23;
    let m = 59;
    let s = 50;*/
    let ticks = 0;//43190;

    const clockElem = document.createElement('div');
    /*clockElem.style.display = 'inline-block';
    clockElem.style.border = '3px solid gray';
    clockElem.style.padding = '1rem 2rem';
    clockElem.style.fontSize = '2rem';
    clockElem.style.color = 'red';
    clockElem.style.backgroundColor = 'black';*/
    clockElem.className = 'clock';

    document.body.appendChild(clockElem);

    /*function ensureTwoDigits(n) {
        return n < 10 ? `0${n}` : n;
    }*/

    function leftPad(n, length, padder = ' ') {
        let x = n.toString();
        while (x.length < length) {
            x = padder + x;
        }

        return x;
    }

    function ensureTwoDigits(n) {
        return leftPad(n, 2, '0');
    }

    function tick() {
        ++ticks;
    }

    function paintClock() {
        /*if (++s === 60) {
            s = 0;
            if (++m === 60) {
                m = 0;
                if (++h === 24) {
                    h = 0;
                }
            }
        }*/
        const s = ticks % 60;
        const m = Math.floor(ticks / 60) % 60;
        let h = Math.floor(ticks / 3600) % 12;

        if (h === 0) {
            h = 12;
        }

        clockElem.innerHTML = `${ensureTwoDigits(h)}:${ensureTwoDigits(m)}:${ensureTwoDigits(s)}`;
    }

    setInterval(() => {
        tick();
        paintClock();
    }, 1000);
    paintClock();
}());
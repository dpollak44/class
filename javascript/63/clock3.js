window.pcsClock = function (parent) {
    'use strict';

    parent = parent || document.body;

    const clockElem = document.createElement('div');
    /*clockElem.style.display = 'inline-block';
    clockElem.style.border = '3px solid gray';
    clockElem.style.padding = '1rem 2rem';
    clockElem.style.fontSize = '2rem';
    clockElem.style.color = 'red';
    clockElem.style.backgroundColor = 'black';*/
    clockElem.className = 'clock';

    parent.appendChild(clockElem);

    function updateClock() {
        clockElem.innerHTML = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock();
};
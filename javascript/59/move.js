(function () {
    'use strict';

    const theButton = document.getElementById('theButton');
    /*theButton.style.color = 'red';
    theButton.style.backgroundColor = 'black';
    theButton.style.fontWeight = 'bold';
    theButton.style.padding = '6px';
    theButton.style.fontSize = '2rem';
    theButton.style.position = 'absolute';
    theButton.style.top = '0';*/

    theButton.className = "bigBlackButton";

    /*for (let i = 0; i < 100; i++) {
        theButton.style.top = `${i}px`;
    }*/

    let intervalId;

    function moveIt() {
        theButton.style.top =
            `${(parseInt(theButton.style.top, 10) || 0) + 1}px`;

        //setTimeout(moveIt, 100);
    }

    const startButton = document.getElementById('start');

    startButton.addEventListener('click', /*() => theButton.style.top =
            `${(parseInt(theButton.style.top, 10) || 0) + 1}px`*//*moveIt);*/
        () => {
            if (!intervalId) {
                intervalId = setInterval(moveIt, 100);
                startButton.innerHTML = 'Stop';
            } else {
                clearTimeout(intervalId);
                intervalId = 0;
                startButton.innerHTML = 'Start';
            }
        }
    );


    //setTimeout(moveIt, 500);
    //moveIt();
    //setInterval(moveIt, 100);

}());
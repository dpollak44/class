(function () {
    'use strict';

    const myTheButton = document.getElementById('theButton');
    const messageElem = document.getElementById('message');
    let clickCount = 0;

    /*theButton.addEventListener('click', function (event) {
        console.log('The button was clicked', event);
    });*/

    function clickHandler() {
        console.log('The button was clicked');
        messageElem.innerHTML = ++clickCount;
    }

    //theButton.addEventListener('click', clickHandler);
    myTheButton.addEventListener('click', clickHandler);
}());
(function () {
    'use strict';

    const theDiv = document.getElementById('theDiv');
    const button1 = document.getElementById('button1');

    theDiv.addEventListener('click', event => {
        console.log('The div was clicked', event);

        /*if (event.target.innerHTML === '1') {
            console.log('Button 1 was clicked');
        }
        else if (event.target.innerHTML === '2') {
            console.log('Button 2 was clicked');
        }
        else if (event.target.innerHTML === '3') {
            console.log('Button 3 was clicked');
        }
        else if (event.target.innerHTML === '4') {
            console.log('Button 4 was clicked');
        }*/

        console.log(`Button ${event.target.innerHTML} was clicked`);
    });

    button1.addEventListener('click', event => {
        console.log('Button 1 was clicked');
        event.stopPropagation();
    });

}());
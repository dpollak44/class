const theOldOnLoad = window.onload;

window.onload = function () {
    'use strict';

    let allowNavigation = false;

    if (theOldOnLoad) {
        theOldOnLoad();
    }

    const theButton = document.getElementById('theButton');

    /*theButton.addEventListener('click', () => {
        console.log('#2 The button was clicked');
    });*/
    addEvent(theButton, 'click', () => {
        console.log('#2 The button was clicked');
        allowNavigation = true;
    });

    function addEvent(element, eventType, callback) {
        // browser sniffing
        /*
        if(navigator.userAgent.indexOf('chrome') > 0) {
            element.addEventListener(eventType, callback);
        } else if (navigator.userAgent.indexOf('IE') > 0) {
            element.attachEvent(eventType, callback)
        }
        */

        // feature detection
        if (element.addEventListener) {
            element.addEventListener(eventType, callback);
        } else if (element.attachEvent) {
            element.attachEvent(eventType, callback);
        }
    }

    /*
    if(browser === 'chrome') {
        theButton.addEventListener('click', () => {
            console.log('#2 The button was clicked');
        });
    } else if (browser === 'IE') {
        theButton.attacheEvent...
    }
    */

    const theDiv = document.getElementById('theDiv');
    addEvent(theDiv, 'click', () => {
        console.log('The div was clicked');
    });

    const buttonOne = document.getElementById('one');
    addEvent(buttonOne, 'click', (event) => {
        console.log('Button 1 was clicked');
        event.stopPropagation(); // prevent bubbling
    });

    const theAnchor = document.getElementById('theAnchor');
    addEvent(theAnchor, 'click', (event) => {
        console.log('Anchor was clicked');

        if (!allowNavigation) {
            console.log('You must agree to the licensing terms first!');
            event.preventDefault();
        }
    });
};
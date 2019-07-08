window.app = window.app || {};

window.app.counter = (function () {
    'use strict';

    let count = 0;

    /*function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return {
        increment: increment,
        getCount: getCount
    }*/
    return {
        increment: () => count++,
        getCount: () => count
    };
}());
window.app = window.app || {};

window.app.utils = (function (utils, theAlerter) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    /*function getDayName(index) {
        return days[index - 1];
    }*/

    function getDayIndex(day) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === day) {
                return i + 1;
            }
        }

        return -1;
    }

    utils.getDayName = function getDayName(index) {
        return days[index - 1];
    };

    //utils.getDayName = getDayName;
    utils.getDayIndex = getDayIndex;

    utils.sayHi = () => theAlerter('Hi!');

    return utils;
}(window.app.utils || {}, window.alert));

console.log('window.app.utils.getDayName(1)', window.app.utils.getDayName(1));
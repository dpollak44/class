window.app = window.app || {};

window.app.utils = (function (utils) {
    'use strict';

    utils.caseInsensitiveCompare = function (a, b) {
        return a.toUpperCase() === b.toUpperCase();
    };

    return utils;
}(window.app.utils || {}));

console.log('window.app.utils.caseInsensitiveCompare("Apple", "aPPle")', window.app.utils.caseInsensitiveCompare("Apple", "aPPle")); 
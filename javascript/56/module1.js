let x = 5;
//let y = x === 5 ? 5 : 20;
let y = x || 20;

window.app = (function (theModule) {
    'use strict';

    /*return {
        a: () => console.log('a'),
        b: () => console.log('b')
    };*/
    theModule.a = () => console.log('a');
    theModule.b = () => console.log('b');

    return theModule;
}(window.app || {}));

window.app.a();
window.app.b();
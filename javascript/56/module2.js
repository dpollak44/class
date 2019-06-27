window.app = (function (theModule) {
    'use strict';

    /*return {
        c: () => console.log('c'),
        d: () => console.log('d')
    };*/

    /*window.app.c = () => console.log('c');
    window.app.d = () => console.log('d');*/

    theModule.c = () => console.log('c');
    theModule.d = () => console.log('d');

    return theModule;
}(window.app || {}));

window.app.c();
window.app.d();
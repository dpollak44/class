window.app = window.app || {};

window.app.views = (function (views) {
    'use strict';

    views.doMoreViewStuff = () => console.log('Im also a view function');
    return views;
}(window.app.views || {}));
window.app = window.app || {};

window.app.views = (function (views) {
    'use strict';

    views.doViewStuff = () => console.log('Im a view function');
    return views;
}(window.app.views || {}));
window.app = window.app || {};

window.app.models = (function (models) {
    'use strict';

    models.doModelStuff = () => console.log('Im a model function');
    return models;
}(window.app.models || {}));
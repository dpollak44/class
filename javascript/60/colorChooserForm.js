(function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    const colorElem = get('color');
    const bgcolorElem = get('bgcolor');

    document.getElementById('theForm')
        .addEventListener('submit', event => {
            setCss(document.body, 'color', colorElem.value);
            setCss(document.body, 'backgroundColor', bgcolorElem.value);

            event.preventDefault();
        });
}());
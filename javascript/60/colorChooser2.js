(function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        //element.style.property = value;
        element.style[property] = value;
    }

    // const colorElem = document.getElementById('color');
    // const bgcolorElem = document.getElementById('bgcolor');

    const colorElem = get('color');
    const bgcolorElem = get('bgcolor');

    colorElem.addEventListener('change', () => setCss(document.body, 'color', colorElem.value));
    bgcolorElem.addEventListener('change', () => setCss(document.body, 'backgroundColor', bgcolorElem.value));

    const nameInput = get('name');
    nameInput.addEventListener('change', () => console.log('change', nameInput.value));
    nameInput.addEventListener('input', () => console.log('input', nameInput.value));
}());
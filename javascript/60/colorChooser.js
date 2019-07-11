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

    document.getElementById('apply')
        .addEventListener('click', () => {
            // document.body.style.color = colorElem.value;
            // document.body.style.backgroundColor = bgcolorElem.value;

            setCss(document.body, 'color', colorElem.value);
            setCss(document.body, 'backgroundColor', bgcolorElem.value);
        });
}());
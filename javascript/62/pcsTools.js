window.pcs = window.pcs || {};

window.pcs.tools = (function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, style) {
        element.style[property] = style;
    }

    function getCss(element, property) {
        return element.style[property];
    }

    return function (id) {
        const elem = get(id);

        return {
            /*setCss: function (property, style) {
                setCss(elem, property, style);
            },
            getCss: function (property) {
                return getCss(elem, property);
            },*/
            css: function (property, style) {
                //console.log(arguments);
                if (arguments.length < 2) {
                    return getCss(elem, property);
                }
                setCss(elem, property, style);
                return this;
            },
            hide: function () {
                setCss(elem, 'display', 'none');
                return this;
            },
            show: function () {
                setCss(elem, 'display', 'block');
                return this;
            },
            click: function (callback) {
                elem.addEventListener('click', callback);
                return this;
            }
        };
    };
}());
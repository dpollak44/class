window.pcs = window.pcs || {};

window.pcs = (function () {
    'use strict';

    const data = {};

    return function (id) {
        function get(id) {
            return document.getElementById(id);
        }

        function setCss(element, property, style) {
            element.style[property] = style;
        }

        function getCss(element, property) {
            // return element.style[property];
            return getComputedStyle(element)[property];
        }

        function getColorPart() {
            return Math.floor(Math.random() * 256);
        }

        function getRandomColor() {
            const r = getColorPart();
            const g = getColorPart();
            const b = getColorPart();

            return `rgb(${r},${g},${b})`;
        }

        const speeds = {
            slow: 500,
            fast: 10,
            default: 50
        };

        function getSpeed(speed) {
            if (typeof (speed) !== 'number') {
                return speeds[speed] || speeds.default;
            }
            return speed;
        }

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
            },
            sparkle: function (duration, speed) {
                duration = duration || 3000;

                const originalColor = getCss(elem, 'color');
                const s = getSpeed(speed);

                const interval = setInterval(() => {
                    setCss(elem, 'color', getRandomColor());
                }, s);

                setTimeout(() => {
                    clearInterval(interval);
                    setCss(elem, 'color', originalColor);
                }, duration);

                return this;
            },
            data: function (key, value) {
                //elem.data = elem.data || {};
                data[id] = data[id] || {};

                if (arguments.length < 2) {
                    return data[id][key];
                    //return elem.data[key];
                }

                data[id][key] = value;
                //elem.data[key] = value;
                return this;
            }
        };
    };
}());
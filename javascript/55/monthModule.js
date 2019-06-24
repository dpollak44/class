//'use strict';

/*
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getMonth(index) {
    return months[index - 1];
}

function getMonthIndex(name) {
    for (let i = 0; i < months.length; i++) {
        if (months[i] === name) {
            return i + 1;
        }
    }

    return 'No such much month';
}

console.log('getMonth(3)', getMonth(3));
console.log('getMonthIndex("March")', getMonthIndex('March'));
*/

/*
const monthUtils = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    getMonth: function (index) {
        return this.months[index - 1];
    },
    getMonthIndex: function (name) {
        for (let i = 0; i < this.months.length; i++) {
            if (this.months[i] === name) {
                return i + 1;
            }
        }

        return 'No such much month';
    }
};

console.log('monthUtils.getMonth(3)', monthUtils.getMonth(3));
console.log('monthUtils.getMonthIndex("March")', monthUtils.getMonthIndex('March'));
*/

/*
function monthUtils() {
    // private data
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    //private functions
    function getMonth(index) {
        return months[index - 1];
    }

    return {
        getMonth: getMonth,
        getMonthIndex: function (name) {
            for (let i = 0; i < months.length; i++) {
                if (months[i] === name) {
                    return i + 1;
                }
            }

            return 'No such much month';
        }
    };
}

const mu = monthUtils();
console.log('mu.getMonth(3)', mu.getMonth(3));
console.log('mu.getMonthIndex("March")', mu.getMonthIndex('March'));
*/

// IIFE (Immediately invoked function expression)
const monthUtils = (function () {
    'use strict';

    // private data
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    //private functions
    function getMonth(index) {
        return months[index - 1];
    }

    return {
        getMonth: getMonth,
        getMonthIndex: function (name) {
            for (let i = 0; i < months.length; i++) {
                if (months[i] === name) {
                    return i + 1;
                }
            }

            return 'No such much month';
        }
    };
}());

console.log('monthUtils.getMonth(3)', monthUtils.getMonth(3));
console.log('monthUtils.getMonthIndex("March")', monthUtils.getMonthIndex('March'));
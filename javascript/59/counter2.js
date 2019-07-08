window.app = window.app || {};


window.app.createCounter = (function () {
    'use strict';

    let countersCreated = 0;

    /*
    return function () {
        countersCreated++;
        console.log(`${countersCreated} counters created`);

        let count = 0;

        /*function increment() {
            count++;
        }

        function getCount() {
            return count;
        }

        return {
            increment: increment,
            getCount: getCount
        }* /
        return {
            increment: () => count++,
            getCount: () => count,
            getNumberOfCounters: () => countersCreated
        };
    };*/

    return {
        create: function () {
            countersCreated++;
            console.log(`${countersCreated} counters created`);

            let count = 0;

            return {
                increment: () => count++,
                getCount: () => count
            };
        },
        getNumberOfCounters: () => countersCreated
    };
}());
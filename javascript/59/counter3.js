/*global app*/

(function () {
    'use strict';

    for (let i = 0; i < 10; i++) {
        app.counter.increment();
    }

    //const counter2 = app.createCounter();
    const counter2 = app.createCounter.create();

    // counter2.increment = function () { count = count + 10 };

    for (let i = 0; i < 5; i++) {
        counter2.increment();
    }

    //const counter3 = app.createCounter();
    const counter3 = app.createCounter.create();
    for (let i = 0; i < 15; i++) {
        counter3.increment();
    }

    console.log(app.counter.getCount());
    console.log(counter2.getCount());
    console.log(counter3.getCount());

    //console.log(counter2.getNumberOfCounters());
    console.log(app.createCounter.getNumberOfCounters());
}());
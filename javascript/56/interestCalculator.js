
/*window.interestCalculator = ...*/
const interestCalculator = (function () {
    'use strict';

    let rate;
    let years;

    return {
        setRate: function (newRate) {
            /*this.*/rate = newRate;
            //this.setYears(5); // works
            //this.years = 5; // creates new useless 5 on this object
            return this; // allow chaining
        },
        setYears: function (newYears) {
            years = newYears;
            return this; // allow chaining
        },
        calculateInterest: function (principle) {
            let n = principle;
            for (let i = 0; i < years; i++) {
                n += n * rate;
            }

            return n - principle;
        }
    };
}());


/*globals xinterestCalculator*/
/*window.*/interestCalculator.setRate(0.10);
interestCalculator.setYears(2);
console.log('interestCalculator.calculateInterest(100)', interestCalculator.calculateInterest(100));

interestCalculator.setRate(0.20).setYears(1).calculateInterest(100);
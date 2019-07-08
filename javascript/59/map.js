(function () {
    'use strict';

    function ourMap(theArray, callback) {
        const results = [];

        theArray.forEach(element => {
            results.push(callback(element));
        });

        return results;
    }

    const numbers = [2, 4, 6];

    function double(number) {
        return number * 2;
    }

    const doubled = ourMap(numbers, double);

    const tripled = ourMap(numbers, n => n * 3);

    console.log(numbers, doubled, tripled);

    const people = [
        { first: 'Donald', last: 'Trump', age: 70 },
        { first: 'Melania', last: 'Trump', age: 60 },
        { first: 'Jared', last: 'Kushner', age: 21 },
        { first: 'Ivanka', last: 'Kushner', age: 21 }
    ];

    console.log(ourMap(people, person => `${person.first} ${person.last}`));
    console.log(people.map(person => `${person.first} ${person.last}`));
}());
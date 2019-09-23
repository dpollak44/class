(function () {
    'use strict';

    const parent = {
        first: 'Donald',
        last: 'Trump',
        age: 70,
        print: function () {
            console.log(`${this.first} ${this.last}`);
        }
    };

    const child = Object.create(parent);
    child.age = 70;
    child.email = 'dtrump@whitehouse.gov';

    for (let prop in parent) {
        if (child.hasOwnProperty(prop) && typeof child[prop] !== 'function') {
            console.log(`${prop} is ${parent[prop]}`);
        }
    }

    for (let prop in child) {
        if (child.hasOwnProperty(prop)) {
            console.log(`${prop} is ${child[prop]}`);
        }
    }

    const keys = Object.keys(child);
    keys.forEach(key => {
        console.log(`${key} is ${child[key]}`);
    });

    const entries = Object.entries(child);
    entries.forEach(keyValue => {
        console.log(`${keyValue[0]} is ${keyValue[1]}`);
    });

    /*
    class Person {
        constructor() { this.name = 'Donald'; }
        print() { }
    }

    const p = new Person();
    for (let prop in p) {
        //if (p.hasOwnProperty(prop)) {
        console.log(`${prop} is ${p[prop]}`);
        //}
    }
    */

    const numbers = [1, 2, 3, 4, 5];
    function print(a, b, c, d, e) {
        console.log(a, b, c, d, e);
    }
    print(...numbers); // spread

    console.log(Math.max(1, 2, 3, 4, 5));
    console.log(Math.max(...numbers));

    /*
    function sum(/*a, b* /) {
        console.log(arguments);
        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    }*/

    // rest operator
    function sum(/*a, b,*/ ...args) {
        console.log(args);
        let total = 0;
        for (let i = 0; i < args.length; i++) {
            total += args[i];
        }
        return total;
    }

    console.log(sum(1, 2, 3, 4, 5));
    console.log(sum(...numbers));


    const name = 'Donald Trump';
    console.log(...name);
    const characters = [...name];// ['D', 'o', etc...]
    console.log(characters);

    const p2 = { ...parent };
    console.log(p2);
    const p3 = { ...child };
    console.log(p3);

    //const [one, two] = numbers;
    const [one, , three, ...rest] = numbers;
    console.log(one, three, rest);

    const { first, last, foo, ...rest2 } = parent;
    console.log(first, last, foo, rest2);
}());
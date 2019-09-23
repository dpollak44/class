(function () {
    'use strict';

    function createPerson(first, last) {
        return {
            first: first,
            last: last,
            getFullName() {
                return `${this.first} ${this.last}`;
            },
            get fullname() {
                return `${this.first} ${this.last}`;
            },
            set fullname(name) {
                // const names = name.split(' ');
                // this.first = names[0];
                // this.last = names[1];
                [this.first, this.last] = name.split(' '); // destructure
            }
        };
    }

    const p = createPerson('Donald', 'Trump');
    console.log(p.fullname);
    console.log(p.getFullName());
    p.fullname = 'Jared Kushner';
    console.log(p.fullname);

    const thing = Object.create({}, {
        foo: {
            value: 1,
            writable: false
            //enumerable: 
            //configurable: 
        },
        firstName: {},
        lastName: {},
        fullname: {
            get() {
                return `${this.first} ${this.last}`;
            },
            //set: function (name) {
            set(name) {
                const names = name.split(' ');
                this.first = names[0];
                this.last = names[1];
            }
        }
    });

    // thing.foo = 5;
    thing.fullname = 'Bernie Sanders';
    console.log(thing.foo, thing.fullname);
}());
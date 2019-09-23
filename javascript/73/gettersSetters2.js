(function () {
    'use strict';

    const person = {
        first: 'Donald',
        last: 'Trump'
    };

    //person.age = 70;
    Object.defineProperty(person, 'fullname', {
        get() {
            return `${this.first} ${this.last}`;
        },
        set(name) {
            // const names = name.split(' ');
            // this.first = names[0];
            // this.last = names[1];
            [this.first, this.last] = name.split(' '); // destructure
        }
    });

    person.fullname = 'Jared Kushner';
    console.log(person.fullname);

    class Person {
        // #_age = 100;
        // department = 'Government';

        constructor(first, last, age) {
            this.first = first;
            this.last = last;
            // this._age = age;

            let _age;
            Object.defineProperty(this, 'age', {
                get() {
                    return _age;
                },
                set(age) {
                    if (age < 0 || age > 120) {
                        throw new Error(`Invalid age: ${age}`);
                    }
                    _age = age;
                }
            });

            this.age = age;

            if (!Person.numberOfPeople) {
                Person.numberOfPeople = 0;
            }
            Person.numberOfPeople++;
        }

        get fullname() {
            return `${this.first} ${this.last}`;
        }

        set fullname(name) {
            //const names = name.split(' ');
            //this.first = names[0];
            //this.last = names[1];
            [this.first, this.last] = name.split(' '); // destructure
        }

        /*get age() {
            return this._age;
        }

        set age(age) {
            if (age < 0 || age > 120) {
                throw new Error(`Invalid age: ${age}`);
            }
            this._age = age;
        }*/

        static getNumberOfPeople() {
            return Person.numberOfPeople;
        }
    }

    const p2 = new Person('Donald', 'Trump', 70);
    p2.fullname = 'Joe Biden';
    console.log(p2);

    //p2.age = 125;

    ///

    function Person2(first, last) {
        this.first = first;
        this.last = last;
        Person2.numberOfPeople++;
    }

    Person2.prototype.print = function () {
        console.log(`${this.first} ${this.last}`);
    };

    Person2.numberOfPeople = 0;

    const p21 = new Person2('Donald', 'Trump');
    const p22 = new Person2('Ivanka', 'Trump');
    console.log(Person2.numberOfPeople);
    console.log(p22.numberOfPeople);

    console.log(Person.getNumberOfPeople());
    // p2.getNumberOfPeople();


    //////////////////////
    // mixin
    function Printable() { }
    Printable.prototype.print = function () {
        console.log(`${this} being printed`);
    };

    function Drawable() { }
    Drawable.prototype.draw = function () {
        console.log(`${this} being drawn`);
    };

    function MyPrintableDrawableClass() {
        Printable.call(this);
        Drawable.call(this);
    }

    MyPrintableDrawableClass.prototype = Object.create(Printable.prototype);
    Object.assign(MyPrintableDrawableClass.prototype, Drawable.prototype);
    MyPrintableDrawableClass.prototype.constructor = MyPrintableDrawableClass;

    const mpd1 = new MyPrintableDrawableClass();
    mpd1.print();
    mpd1.draw();
}());
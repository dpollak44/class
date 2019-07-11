(function () {
    'use strict';

    /*const potus = {
        name: 'Donald Trump',
        age: 70,
        /*print: function () {
            console.log(this.name, this.age);
        }* /
        print: () => console.log(this.name, this.age)
    };

    potus.print();*/


    const person = {
        name: 'Sam',
        age: 0,
        test2: function () {
            console.log(`${this.name} is ${this.age} old`);
        },
        growUp: function () {
            /*setInterval(function () {
                this.age++;
                console.log(`${this.name} is ${this.age} old`);
            }, 1000);*/

            /*setInterval(() => {
                this.age++;
                console.log(`${this.name} is ${this.age} old`);
            }, 1000);*/

            this.test2();


            const test3 = () => console.log(`${this.name} is ${this.age} old`);

            test3();

            (() => console.log(`IIFE - ${this.name} is ${this.age} old`))();

            /*
            function test() {
                console.log(`${this.name} is ${this.age} old`);
            }

            test();
            */

            const that = this;
            function test() {
                console.log(`${that.name} is ${that.age} old`);
            }

            test();

            setInterval(function () {
                that.age++;
                console.log(`${that.name} is ${that.age} old`);
            }, 1000);
        }
    };

    person.growUp();
}());
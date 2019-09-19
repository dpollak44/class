(function () {
    'use strict';

    class Person {
        constructor(first, last) {
            this.first = first;
            this.last = last;
        }

        print() {
            console.log(this.first, this.last);
        }

        sleep() {
            console.log(this.first, 'is sleeping...');
        }
    }

    const p = new Person('Donald', 'Trump');
    p.print();

    class Employee extends Person {
        constructor(first, last, department) {
            super(first, last);
            this.department = department;
        }

        print() {
            console.log(this.first, this.last, this.department);
        }
    }

    const e = new Employee('Jared', 'Kushner', 'Government');
    e.print();
}());
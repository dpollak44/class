(function () {
    'use strict';

    const theDonald = {
        first: 'Donald',
        last: 'Trump',
        print: function () {
            console.log(this.first, this.last);
        }
    };

    theDonald.print();

    /*function printPerson() {
        console.log(this.first, this.last);
    }*/
    const personFunctions = {
        print: function () {
            console.log(this.first, this.last);
        },
        sleep: function () {
            console.log(this.first, 'is sleeping...');
        }
    };

    function personFactory(first, last) {
        const person = {
            first: first,
            last: last,
            /*print: function () {
                console.log(this.first, this.last);
            }*/
            //print: printPerson
            /*print: personFunctions.print,
            sleep: personFunctions.sleep*/
        };
        Object.assign(person, personFunctions);
        return person;
    }

    const jared = personFactory('Jared', 'Kushner');
    const ivanka = personFactory('Ivanka', 'Trump');
    jared.print();
    ivanka.print();
    ivanka.sleep();

    function Person(first, last) {
        this.first = first;
        this.last = last;

        /*this.print = function () {
            console.log(this.first, this.last);
        };*/
        //this.print = personFunctions.print;
    }

    Person.prototype.print = function () {
        console.log(this.first, this.last);
    };

    Person.prototype.sleep = function () {
        console.log(this.first, 'is sleeping...');
    };


    const mike = new Person('Mike', 'Pence');
    // const bernie = Person('Bernie', 'Sanders');

    mike.print();
    mike.sleep();

    function Employee(first, last, department) {
        //this.first = first;
        //this.last = last;
        Person.call(this, first, last);
        this.department = department;
    }

    //Employee.prototype = Person.prototype;
    //Employee.prototype = new Person();//'a first name', 'a last name');
    Employee.prototype = Object.create(Person.prototype);

    Employee.prototype.print = function () {
        console.log(this.first, this.last, this.department);
    };

    const bill = new Employee('Bill', 'Gates', 'IT');
    bill.print();
    bill.sleep();
}());
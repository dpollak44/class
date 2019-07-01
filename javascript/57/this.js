(function () {
    'use strict';

    function printPerson() {
        console.log('[', this.name, ']', this.age);
    }

    const donald = {
        name: 'Donald',
        age: 70,
        print: printPerson/*function () {
            console.log('[',this.name,']', this.age);
        }*/
    };

    const mike = {
        name: 'Mike',
        age: 65,
        print: printPerson/*function () {
            console.log('[',this.name,']', this.age);
        }*/
    };

    donald.print();
    //printPerson();

    mike.print();

    const thePrintFromDonald = donald.print;
    //thePrintFromDonald();

    //const potus = donald;
    //potus.print();

    thePrintFromDonald.call(mike/*,1,2,3*/);
    thePrintFromDonald.call(donald);
    thePrintFromDonald.call({ name: 'newOnTheFly', age: 10 });

    thePrintFromDonald.apply(mike/*,[1,2,3]*/);

    const greeter1 = {
        greeting: 'Hello'
    };

    const greeter2 = {
        greeting: 'Shalom'
    };

    function greet(name, age) {
        console.log(this.greeting, name, age);
    }

    //greet('Donald');
    greet.call(greeter1, 'Donald', 70);
    greet.call(greeter2, 'Donald', 70);

    greet.apply(greeter2, ['Donald', 70]);

    const sayHello = greet.bind(greeter1);
    // some time later
    sayHello('Donald', 70);

    const sayShalomToMike = greet.bind(greeter2, 'Mike');
    // some time later
    sayShalomToMike(65);

    ////////
    const sayHi = () => console.log('Hi!');
    sayHi();

    const person = {
        name: 'Donald',
        //print: () => console.log(this.name),
        addPrint: function () {
            this.print = () => console.log(this.name);
        }
    };

    person.addPrint();
    person.print();
}());
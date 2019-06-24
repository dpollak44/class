'use strict';

/*const*/let potus = {
    firstName: "Donald",
    lastName: "Trump",
    age: 70
};

console.log(potus);
console.log(potus.firstName, potus.lastName);

potus.firstName = 'Ivanka';
console.log(potus.firstName, potus.lastName);

function printPerson(person) {
    console.log(person.firstName, person.lastName, person.age);
}

printPerson(potus);
//potus = 5;

/////////////////////////////////////////////

function createPerson(first, last, age) {
    return {
        firstName: first,
        lastName: last,
        age: age,
        print: function () {
            console.log(this.firstName, this.lastName, this.age);
        }
    };
}

const melania = createPerson('Melania', 'Trump', 50);
const jared = createPerson('Jared', 'Kushner', 21);
//printPerson(melania);
//printPerson(jared);

melania.print();
jared.print();

////////

console.log('personObject', jared, typeof jared);
const personString = JSON.stringify(jared);
console.log('personString', personString, typeof personString);

const reconstitutedPerson = JSON.parse(personString);
console.log('reconstitutedPerson', reconstitutedPerson, typeof reconstitutedPerson);

const jaredTheSecond = createPerson(reconstitutedPerson.firstName, reconstitutedPerson.lastName, reconstitutedPerson.age);
jaredTheSecond.print();


/*

<person>
    <firstName>Donald</firstName>
    <lastName>Trump</lastName>
    <age>70</age>
</person>

<person firstName="Donald" lastName="Trump" age="70"/>
*/

const bob = createPerson('Bob', 'Jones', 30);
bob.favoriteSnacks = ['chips', 'danish', 'ice cream'];

const bobString = JSON.stringify(bob);
console.log(bobString, typeof bobString);

const reconstitutedBob = JSON.parse(bobString);
console.log(reconstitutedBob, typeof reconstitutedBob);

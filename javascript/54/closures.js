'use strict';

greet();

function greet() {
    console.log('Hello');
}

greet();

////////

function getGreeter() {
    return greet; /*function () {
        console.log('Hello');
    };*/
}

const greeter = getGreeter();
greeter();

getGreeter()
getGreeter()();

//let x = 5;
//x();

/////////////////

function getBetterGreeter(name) {
    let greeting = 'Hello';

    return function () {
        console.log(greeting, name);
    };
}

const betterGreeter = getBetterGreeter('Donald');
// 2000 lines of code, 10 minutes later...
betterGreeter();

const greetJared = getBetterGreeter('Jared');
greetJared();

function noClosureHereMoveAlong(name) {
    console.log('Hi', name);
}

/*let five =*/ noClosureHereMoveAlong('Bob');

///////////////

function multiply(x, y) {
    return x * y;
}

console.log('multiply(2,5)', multiply(2, 5));

function getMultiplier(x) {
    return function (y) {
        return x * y;
    };
}

const multiplyByFive = getMultiplier(5);
const multiplyBySix = getMultiplier(6);

console.log('multiplyByFive(2)', multiplyByFive(2));
console.log('multiplyByFive(3)', multiplyByFive(3));
console.log('multiplyBySix(2)', multiplyBySix(2));
console.log('multiplyBySix(3)', multiplyBySix(3));

/////

/*
//let x;

function usedToBeInSide(y) {
    return x * y;
};

function getBrokenMultiplier(x) {
    return usedToBeInSide;
}

const multiplyByFiveBroken = getBrokenMultiplier(5);
console.log('multiplyByFiveBroken(2)', multiplyByFiveBroken(2));
*/

for (let i = 0; i < 5; i++) {
    greet();
}

function repeat(action, numTimes) {
    for (let i = 0; i < numTimes; i++) {
        action();
    }
}

console.log('repeat');
repeat(greet, 10);


///// 
// callbacks

function ourForEach(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        callback(theArray[i]/*, i, theArray*/);
    }
}

const letters = ['A', 'B', 'C'];
ourForEach(letters, function (letter) {
    console.log(letter);
});

function print(thing) {
    console.log(thing);
}

ourForEach(letters, print);
ourForEach(letters, console.log);

console.log('built in forEach');
letters.forEach(function (letter) {
    console.log(letter);
});

letters.forEach(print);
letters.forEach(console.log);

////////////

function takesOneParam(x) {
    console.log(x);
}

takesOneParam();
takesOneParam(1);
takesOneParam(1, 2);

function takesTwoParam(x, y = 5) {
    console.log(x, y);
}

takesTwoParam();
takesTwoParam(1);
takesTwoParam(1, 2);

//////////

// arrow function
letters.forEach(letter => console.log(letter));

const sayHelloArrow = name => console.log('Hello', name);
sayHelloArrow('Donald');

const multiplyArrow = (x, y) => x * y;

const multiParamMultiLine = (x, y) => {
    // some code
    return x * y;
};

//////

function ourFilter(theArray, callback) {
    const results = [];

    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) {
            results.push(theArray[i]);
        }
    }

    return results;
}

const mixed = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('ourFilter(mixed, number => number % 2 !== 0)', ourFilter(mixed, number => number % 2 !== 0));

function isEven(number) {
    return number % 2 === 0;
}

console.log('ourFilter(mixed, isEven)', ourFilter(mixed, isEven));
console.log('ourFilter(mixed, number => !isEven(number))', ourFilter(mixed, number => !isEven(number)));

console.log('mixed.filter(isEven)', mixed.filter(isEven));
console.log('mixed.filter(n => !isEven(n))', mixed.filter(n => !isEven(n)));
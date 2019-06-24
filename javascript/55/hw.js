'use strict';

function ourEvery(array, callback) {
    /*let allPassed = true;

    array.forEach(element => {
        if (!callback(element)) {
            //return false;
            allPassed = false;
        }
    });

    //return true;
    return allPassed;*/

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }

    return true;
}

const upper = ['A', 'B', 'C'];
const lower = ['a', 'b', 'c'];
const mixed = ['A', 'b', 'C'];

console.log(`ourEvery(upper, function (letter) {
    return letter === letter.toUpperCase();
})`, ourEvery(upper, function (letter) {
    return letter === letter.toUpperCase();
}));

console.log(`ourEvery(lower, function (letter) {
    return letter === letter.toUpperCase();
})`, ourEvery(lower, function (letter) {
    return letter === letter.toUpperCase();
}));

console.log('ourEvery(mixed, letter => letter === letter.toUpperCase()',
    ourEvery(mixed, letter => letter === letter.toUpperCase()));

console.log('upper.every(letter => letter === letter.toUpperCase())',
    upper.every(letter => letter === letter.toUpperCase()));

console.log('lower.every(letter => letter === letter.toUpperCase())',
    lower.every(letter => letter === letter.toUpperCase()));

console.log('mixed.every(letter => letter === letter.toUpperCase())',
    mixed.every(letter => letter === letter.toUpperCase()));

///////////////////

function ourSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }

    return false;
}

console.log(upper, 'ourSome(upper, letter => letter === letter.toUpperCase()',
    ourSome(upper, letter => letter === letter.toUpperCase()));

console.log(lower, 'ourSome(lower, letter => letter === letter.toUpperCase()',
    ourSome(lower, letter => letter === letter.toUpperCase()));

console.log(mixed, 'ourSome(mixed, letter => letter === letter.toUpperCase()',
    ourSome(mixed, letter => letter === letter.toUpperCase()));

console.log(upper, 'upper.some(letter => letter === letter.toUpperCase())',
    upper.some(letter => letter === letter.toUpperCase()));

console.log(lower, 'lower.some(letter => letter === letter.toUpperCase())',
    lower.some(letter => letter === letter.toUpperCase()));

console.log(mixed, 'mixed.some(letter => letter === letter.toUpperCase())',
    mixed.some(letter => letter === letter.toUpperCase()));

/////////////////

function onlyIf(array, test, action) {
    array.forEach(element => {
        if (test(element)) {
            action(element);
        }
    });
}

// could write once and keep passing in
function isUpperCase(letter) {
    return letter === letter.toUpperCase();
}

console.log('onlyIf(upper, isUpperCase, console.log)');
onlyIf(upper, isUpperCase, console.log);

console.log('onlyIf(lower, isUpperCase, console.log)');
onlyIf(lower, isUpperCase, console.log);

console.log('onlyIf(mixed, isUpperCase, console.log)');
onlyIf(mixed, isUpperCase, console.log);

upper.filter(isUpperCase).forEach(upperCaseLetter => console.log(upperCaseLetter));
lower.filter(isUpperCase).forEach(upperCaseLetter => console.log(upperCaseLetter));
mixed.filter(isUpperCase).forEach(upperCaseLetter => console.log(upperCaseLetter));
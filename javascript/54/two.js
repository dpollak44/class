'use strict';

console.log('In two!');

let x = 'string';
let y = 123;
let z = 1.23;
let a = true;

for (let i = 0; i < x.length; i++) {
    console.log(i, x.charAt(i));
}

console.log(typeof x);
x = 100;
console.log(typeof x);

console.log(x);

let d = 2;
let e = '2';
let f = 2;

console.log('d == e', d == e);
console.log('d === e', d === e);
console.log('d != e', d != e);
console.log('d !== e', d !== e);

console.log('d + e', d + f);
console.log('d + e', d + e);
console.log('d + Number(e)', d + Number(e));
console.log('d - e', d - e);

let result = 'Hello' - 'Goodbye';
console.log(result);

let anotherResult = NaN;

console.log('result == anotherResult', result == anotherResult);
console.log('NaN == NaN', NaN == NaN);
console.log('isNan(NaN)', isNaN(NaN));

let undefinedVariable;
let nullVariable = null;

console.log(undefinedVariable, nullVariable);

console.log('undefinedVariable == nullVariable', undefinedVariable == nullVariable);
console.log('undefinedVariable === nullVariable', undefinedVariable === nullVariable);

if (nullVariable === null || nullVariable === undefined) {
    console.log('nullVariable is null or undefined')
}

if (nullVariable == null) {
    console.log('nullVariable is null or undefined')
}

undefined = 'hello';

console.log(undefined);
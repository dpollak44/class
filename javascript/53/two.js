'use strict';
//var a;
// function add...
// var foo;

console.log(a);
var a = 10;
//var a = 11;
b = 5;

console.log('add(2,3)', add(2, 3));

function add(x, y) {
    //var a;
    //var c;

    c = 5;
    console.log(c);

    var a = 1;
    b = 2;
    var c = 3;
    d = 4;

    console.log('in function', a, b, c, d);

    return x + y;
}

//foo();

var foo = function () {
    console.log('In another function');
};

foo();

console.log('add(2,3)', add(2, 3));
console.log('out of function', a, b/*, c*/, d);

//console.log(f);
let f = 5;
const PI = 3.14;
PI = 5;
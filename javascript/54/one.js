//var a;
//var e;

console.log(a);
// console.log(b);

var a = 1;
b = 2;

console.log(a);
console.log(b);

function sayHi() {
    //var c;
    console.log(c);
    //console.log(d);
    var c = 5;
    d = 6;
    console.log(c);
    console.log(d);
}

sayHi();
//console.log(c);
console.log(d);

console.log('about to loop');
for (i = 0; i < 10; i++) {
    // var e; -- not true
    console.log(i);
    console.log('e before', e);
    var e = 1;
    console.log('e after', e);
}

console.log(e);

//console.log(x);
let x = 'hello';
const PI = 3.14;

for (let z = 0; z < 19; z++) {
    console.log('z', z);
    let q = 'q';
}

console.log(x);
//console.log(q);
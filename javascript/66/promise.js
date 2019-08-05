/*global doSomething*/

/*
function doSomething(callback) {
    setTimeout(callback, 1);
    //callback();
}

console.log('Before call to do something');
doSomething(() => console.log('Did something'));
console.log('After call to doSomething');
*/

function doSomething() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

console.log('Before call to do something');
doSomething()
    .then(() => console.log('Did something'));
console.log('After call to doSomething');

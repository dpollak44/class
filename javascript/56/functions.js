(function () {
    //var i
    'use strict';

    /*function createFunction(x) {
        return function () {
            console.log(x);
        };
    }*/

    const functionList = [];
    let x;
    let i;
    for (/*var*//*let*/ i = 0; i < 5; i++) {
        console.log('before', i);

        /*functionList[i] = function () {
            console.log(i);
        };*/

        //functionList[i] = createFunction(i);

        functionList[i] = (function (x) {
            return function () {
                console.log(x);
            };
        }(i));
    }

    //console.log(x);

    //console.log('after loop', i);
    functionList.forEach(function (f) {
        f();
    });

    //functionList.forEach(f => f());
}());
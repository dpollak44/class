//(function () {
//'use strict';

// must be global
function doSomething(data) {
    console.log(data, typeof (data));
}

(function () {
    'use strict';
    doSomething('hello');
    doSomething({ name: 'Bob' });

    //const script = document.createElement('script');
    //script.src = "someData";
    //document.head.appendChild(script);
    $.getScript('someData?callback=doSomething').
        done(data => {
            console.log('got', data);
        });

}());
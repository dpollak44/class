(function () {
    'use strict';

    const request = new XMLHttpRequest();
    //console.log(request, request.readyState);

    /*request.onreadystatechange = function (event) {
        //console.log(event, request, request.readyState);
        if (request.readyState === 4) {
            console.log(request);

            if (request.status < 400) {
                console.log(request.responseText);
            } else {
                console.error(request.status, request.statusText);
            }
        }
    };*/

    request.onload = () => {
        if (request.status < 400) {
            console.log(request.responseText);
        } else {
            console.error(request.status, request.statusText);
        }
    };

    request.open('GET', 'ajax.html');
    request.send();

    // console.log('before timeout', request.responseText);

    // setTimeout(() => console.log(request.responseText), 2000);



}());
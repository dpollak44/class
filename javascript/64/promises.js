(function () {
    'use strict';

    /*const promise = new Promise(function (resolve, reject) {
        // do work
        const succeeded = false;
        if (succeeded) {
            resolve('It worked');
        } else {
            reject('Something went wrong');
        }
    });

    promise
        .then(result => console.log(result))
        .catch(err => console.log(err));*/


    function get(url) {
        return new Promise(function (resolve, reject) {
            const request = new XMLHttpRequest();

            request.onload = () => {
                if (request.status < 400) {
                    resolve(request.responseText);
                } else {
                    reject(new Error(request.status));
                }
            };

            request.onerror = () => {
                reject(new Error('Network error'));
            };

            request.open('GET', url);
            request.send();
        });
    }

    /*get('contacts.json')
        .then(rt => JSON.parse(rt))
        .then(rt => console.log('Success', typeof (rt), rt))
        //.then()
        //.then()
        .catch(err => console.error('Failure', err));*/

    function getJSON(url) {
        return get(url).then(rt => JSON.parse(rt));
    }

    /*getJSON('contacts.json')
        .then(rt => console.log('Success', typeof (rt), rt));*/

    fetch('xcontacts.json')
        .then(r => {
            if (r.ok) {
                return r.json();
            } else {
                throw new Error(r.status);
            }
        })
        .then(rt => console.log('Success', rt))
        .catch(err => console.error('Failure', err));
}());
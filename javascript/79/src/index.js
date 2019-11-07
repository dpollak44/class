/*global $*/
//(function () {
//    'use strict';
import './css/index.css';

import Snake from './images/snakehead.png';
import Apple from './images/apple.png';

import $ from 'jquery';
// const $ = require('jquery');

//import foo, { sayHello2 as bar } from './sayHello.js';
//import sayHello, { sayHello2 } from './sayHello.js';

let clicks = 0;
//const results = $('#results');

$('#theButton').click(() => {
    $('#results')/*results*/.text(`You have clicked me ${++clicks} times`);

    const snakeImage = document.createElement('img');
    snakeImage.src = Snake;
    document.body.appendChild(snakeImage);

    const appleImage = document.createElement('img');
    appleImage.src = Apple;
    document.body.appendChild(appleImage);

    //foo();
    //bar();
    import(/* webpackChunkName: "sayHello" */ './sayHello').then(module => {
        const sayHello = module.default;
        sayHello();

        module.sayHello2();
    });


    // doSomething();
});

if (module.hot) {
    module.hot.accept('./sayHello.js', function () {
        console.log('Accepting the updated sayHello module!');
        sayHello();
        sayHello2();
    })
}

//}());
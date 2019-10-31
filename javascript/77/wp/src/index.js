/*global moment*/
// (function () {
'use strict';

import moment from 'moment';

const dateInput = document.getElementById('date');
const resultElem = document.getElementById('result');

dateInput.addEventListener('change', () => {
    resultElem.innerHTML = `You picked ${moment(dateInput.value).fromNow()}`;
});

//}());
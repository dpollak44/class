/*global $, pcs*/
(function () {
    'use strict';

    const fileNameInput = $('#filename');
    const outputElem = $('#output');
    const spinner = $('#spinner');

    console.log('before click');
    $('#load').click(() => {
        console.log('inside click');
        spinner.show();
        outputElem.text('');

        console.log('about to fetch');

        fetch(fileNameInput.val())
            .then(response => {
                console.log('fetched successfully');
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(responseText => {
                outputElem.text(responseText);
                $('#appendHere').html(responseText);
            })
            .catch(err => {
                pcs.messageBox.show(err, true);
            })
            //.then(() => {
            .finally(() => {
                spinner.hide();
            });

        console.log('After fetch');
    });
    console.log('after click');
}());
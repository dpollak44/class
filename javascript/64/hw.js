/*global $*/
(function () {
    'use strict';

    const nameInput = $('#name');
    const addressInput = $('#address');
    const nameDisplay = $('#nameDisplay');
    const addressDisplay = $('#addressDisplay');
    const submitButton = $('#signup button[type="submit"]');
    //const acceptCheckBox = $('#accept');
    //just for fun create dom element here
    const acceptCheckBox = $('<span><input type="checkbox" id="accept">I have read the terms and conditions</span>')
        .prependTo($(document.body))
        .find('input');

    acceptCheckBox.change(() => {
        //console.log(acceptCheckBox.prop('checked'));
        //console.log(acceptCheckBox.is(':checked'));

        submitButton.prop('disabled', !acceptCheckBox.is(':checked'));

        //$('#signup input').prop('disabled', !acceptCheckBox.is(':checked'));
        //$('#theInputs').prop('disabled', !acceptCheckBox.is(':checked'));
    });

    $('#signup').submit(event => {
        nameDisplay.text(/*nameDisplay.text() +*/ nameInput.val());
        addressDisplay.text(/*addressDisplay.text() +*/ addressInput.val());

        event.preventDefault();
    });
}());
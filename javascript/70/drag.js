/*global $*/
(function () {
    'use strict';

    let dragging;
    let offset;

    /*const theBox = $('.box')
        .mousedown(e => {
            console.log('down', e);
            dragging = true;
            offset = { y: e.offsetY, x: e.offsetX };
        });*/
    $(document)
        .on('mousedown', '.box', e => {
            console.log('down', e);
            dragging = $(e.target);
            offset = { y: e.offsetY, x: e.offsetX };
        }).mousemove(e => {
            if (dragging) {
                console.log('move', e);
                dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
                e.preventDefault();
            }
        }).mouseup(e => {
            console.log('up', e);
            dragging = null;
        });

    const body = $('body');
    const colorInput = $('#color');

    $('#add').click(() => {
        $('<div class="box"></div>')
            .appendTo(body)
            .css('backgroundColor', colorInput.val());
    });
}());
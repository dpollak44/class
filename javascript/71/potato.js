/*global $*/
(function () {
    'use strict';

    //const partContainer = $('#parts');
    const partContainer = $('#main');

    // could load image list from json instead of hard coding 22 images
    // const maxWidth = partContainer.innerWidth();
    const maxWidth = partContainer.innerWidth() * 0.3;
    let x = 0;
    let y = 0;
    for (let i = 1; i < 23; i++) {
        //partContainer.append(`<img class="part" src="images/${i}.png" />`);
        $(`<img class="part" src="images/${i}.png" />`)
            .appendTo(partContainer)
            .css({ top: y, left: x });

        x += 100;
        if (x > maxWidth - 50) {
            x = 0;
            y += 100;
        }
    }

    const theParts = $('.part');

    let maxZindex = 0;
    /*let dragging;
    let offset;
    $(document)
        .on('mousedown', '.part', e => {
            dragging = $(e.target);
            dragging.css('z-index', ++maxZindex);
            offset = { y: e.offsetY, x: e.offsetX };
        }).mousemove(e => {
            if (dragging) {
                dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
                e.preventDefault();
            }
        }).mouseup(() => {
            dragging = null;

            saveState();
        });*/

    function saveState() {
        const state = [];
        theParts.each((index, elem) => {
            const part = $(elem);
            state.push({
                part: part.attr('src'),
                top: part.css('top'),
                left: part.css('left'),
                zIndex: part.css('z-index')
            });
        });

        localStorage.parts = JSON.stringify(state);
    }

    theParts.draggable({
        stop: saveState,
        stack: '.part'
    });

    if (localStorage.parts) {
        const parts = JSON.parse(localStorage.parts);
        parts.forEach(part => {
            $(`img[src="${part.part}"]`).css({ top: part.top, left: part.left, zIndex: part.zIndex });
            maxZindex = Math.max(part.zIndex, maxZindex);
        });
    }
}());
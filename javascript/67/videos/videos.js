/*global $*/
//(function () {

//window.onload = () => {...}
//$.when($.ready).then(() => {
$(() => {
    'use strict';

    const player = $('#player');
    //let activeVideo = $();

    fetch('videos.json')
        .then(r => r.json())
        .then(videos => {
            videos.forEach(video => {
                $(`<li>
                        <img src="${video.picture || "media\\images\\default.png"}" alt="${video.title}"/>
                        <span>${video.title}</span>
                   </li>`).appendTo($('#sidebar ul'))
                    .click(e => {
                        player.attr('src', video.url);
                        // player[0].play();

                        //$(e.target).css('color', 'lightgray');
                        //$(e.target).css({ color: 'lightgray', 'font-family': 'cursive' });

                        //if (activeVideo) {
                        //activeVideo.removeClass('active');
                        //}
                        //activeVideo = $(e.target);
                        //activeVideo.addClass('watched active');

                        $('.active').removeClass('active');
                        $(e.target).addClass('watched active');
                    });
            });
        });
});
//}());
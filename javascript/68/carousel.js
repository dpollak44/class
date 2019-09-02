/* global $*/
(function () {
    'use strict';

    const tagsInput = $('#tags');
    const pictureImg = $('#picture img');
    const pictureTitle = $('#picture h2');
    let pictures;
    let index = 0;

    function refreshPicture() {
        pictureImg.attr('src', pictures[index].url); // pictures[index].media.m);
        pictureTitle.text(pictures[index].title);
    }

    $('#go').click(() => {
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
            { tags: tagsInput.val(), format: 'json' })
            .done(pictureData => {
                /*pictureData.items.forEach(picture => {
                    $('#pictures').append(`<figure>
                                              <img src="${picture.media.m}" alt="${picture.title}"/>
                                              <figcaption><h2>${picture.title}</h2></figcaption>
                                           </figure>
                    `)
                });*/
                //pictures = pictureData.items;
                pictures = pictureData.items.map(picture => ({ title: picture.title, url: picture.media.m }));

                $('.control').show();
                refreshPicture();
            });
    });

    $('#left').click(() => {
        if (--index < 0) {
            index = pictures.length - 1;
        }
        refreshPicture();
    });

    $('#right').click(() => {
        if (++index === pictures.length) {
            index = 0;
        }
        refreshPicture();
    });
}());
/* global google */
/*(function () {
    'use strict';*/

window.initMap = function () {
    'use strict';

    const loc = { lat: 40.096068191437205, lng: -74.222168870743332 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'BMG',
        //icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aGgMz2q1PH6TBnQg1pVvTfXTNEIwVYuNJtFiNH0lICTLeyJG'
        icon: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEaZ1coQDu7ZwGqVhC6ZFKuIAwMa-s4HceTLaRJQZamuVPpdb3w',
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    const marker2 = new google.maps.Marker({
        position: { lat: 40.1, lng: -74.3 },
        map: map,
        title: 'Somewhere else'
    });

    map.addListener('center_changed', () => {
        const newCenter = map.getCenter();
        console.log(newCenter.lat(), newCenter.lng());
    });

    /*const infoWindow = new google.maps.InfoWindow({
        content: `
        Beth Medrash Govoha (Hebrew: בית מדרש גבוה, lit: School of Higher Education) is an accredited institution of Higher Education that is licensed by the U.S. state of New Jersey to offer undergraduate and postgraduate degrees. It is located in Lakewood Township, New Jersey, and is affiliated with the Jewish faith. Beth Medrash Govoha is often referred to by its initials, as "BMG," or as the "Lakewood Yeshiva".
        As of 2019 BMG had an enrollment of 6,715 students, 2,748 in its undergraduate programs, and 3,967 in its postgraduate curriculum,[1][2] making it the world's largest Jewish-affiliated institution of higher education outside of the State of Israel.[3] The institution, founded by Rabbi Aharon Kotler in 1943, attracts students from around the world.
        BMG offers a broad spectrum of Talmudic Studies, with some 240 study programs (called Chaburos) on four campuses, which are led by Program heads, (called Roshei Chaburos) who guide groups of students in BMG's unique model of independent learning.
        <br>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha">more info</a>
        `
    });*/
    const infoWindow = new google.maps.InfoWindow();

    marker.addListener('click', () => {
        infoWindow.setContent(`
            Beth Medrash Govoha (Hebrew: בית מדרש גבוה, lit: School of Higher Education) is an accredited institution of Higher Education that is licensed by the U.S. state of New Jersey to offer undergraduate and postgraduate degrees. It is located in Lakewood Township, New Jersey, and is affiliated with the Jewish faith. Beth Medrash Govoha is often referred to by its initials, as "BMG," or as the "Lakewood Yeshiva".
            As of 2019 BMG had an enrollment of 6,715 students, 2,748 in its undergraduate programs, and 3,967 in its postgraduate curriculum,[1][2] making it the world's largest Jewish-affiliated institution of higher education outside of the State of Israel.[3] The institution, founded by Rabbi Aharon Kotler in 1943, attracts students from around the world.
            BMG offers a broad spectrum of Talmudic Studies, with some 240 study programs (called Chaburos) on four campuses, which are led by Program heads, (called Roshei Chaburos) who guide groups of students in BMG's unique model of independent learning.
            <br>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha">more info</a>
        `);
        infoWindow.open(map, marker);
    });

    marker2.addListener('click', () => {
        infoWindow.setContent('This is some other place');
        infoWindow.open(map, marker2);
    });

    setTimeout(() => {
        //map.setCenter({ lat: 40.1, lng: -74.3 });
        map.panTo({ lat: 40.1, lng: -74.3 });
    }, 5000);
};

/*}());*/
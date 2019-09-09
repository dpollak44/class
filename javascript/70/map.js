/*global google, $*/
window.initMap = function () {
    'use strict';

    const lakewood = { lat: 40.096068191437205, lng: -74.222168870743332 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: lakewood,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const infoWindow = new google.maps.InfoWindow({
        maxWidth: 250
    });

    let openSummary;
    const placesList = $("#sidebar ul");
    const tagsInput = $('#tags');
    const rowsInput = $('#rows');
    $('#inputForm').submit(e => {
        e.preventDefault();

        /*$.getJSON('http://api.geonames.org/wikipediaSearch?username=slubowsky&type=json',
                    { q: tagsInput.val(), maxRows: rowsInput.val() })*/
        /*$.ajax({
            dataType: "json",
            url: 'http://api.geonames.org/wikipediaSearch?username=slubowsky&type=json',
            data: { q: tagsInput.val(), maxRows: rowsInput.val() },
            cache: false
        })
            .done(data => {*/
        fetch(`http://api.geonames.org/wikipediaSearch?username=slubowsky&type=json&q=${tagsInput.val()}&maxRows=${rowsInput.val()}`/*, { cache: 'no-store' }*/)
            .then(r => r.json())
            .then(data => {
                console.log(data);

                const bounds = new google.maps.LatLngBounds();

                data.geonames.forEach(place => {
                    /*let icon;
                    if (place.thumbnailImg) {
                        icon = {
                            url: place.thumbnailImg,
                            scaledSize: new google.maps.Size(50, 50)
                        };
                    }*/
                    const loc = { lat: place.lat, lng: place.lng };
                    bounds.extend(loc);
                    const marker = new google.maps.Marker({
                        position: loc,
                        map: map,
                        title: place.title,
                        icon: place.thumbnailImg ? {
                            url: place.thumbnailImg,
                            scaledSize: new google.maps.Size(50, 50)
                        } : null
                    });

                    marker.addListener('click', () => {
                        infoWindow.setContent(`${place.summary}<br/><a href="http://${place.wikipediaUrl} target="_blank">see more</a>`);
                        infoWindow.open(map, marker);
                    });

                    const placeInfo = $(`<li title="${place.summary}">
                           <img src="${place.thumbnailImg || "images\\default.png"}" alt="${place.title}"/>
                           <span>${place.title}</span>
                           <div class="summary">${place.summary}</div>
                       </li>`)
                        .appendTo(placesList)
                        .click(() => {
                            const placeSummary = $(placeInfo.find('.summary'));
                            //if (!placeSummary.is(":visible")) {
                            if (!placeSummary.is(openSummary)) {
                                map.fitBounds(bounds);
                                setTimeout(() => {
                                    map.panTo(loc);
                                    setTimeout(() => {
                                        map.setZoom(18);
                                    }, 500);
                                }, 500);
                                //$('.summary').slideUp('slow');
                                if (openSummary) {
                                    openSummary.slideUp('slow');
                                }
                                placeSummary.slideDown('slow');

                                openSummary = placeSummary;
                            }
                        });
                });

                map.fitBounds(bounds);
            });
    });

    //////////////////////////////
    /*let markers = [];
    let circles = [];*/
    let drawings = [];
    const drawingManager = new google.maps.drawing.DrawingManager({
        markerOptions: {
            draggable: true
        },
        circleOptions: {
            editable: true
        }
    });
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
        //markers.push(marker.position);
        //localStorage.markers = JSON.stringify(markers);
        //const index = drawings.push({ type: 'marker', position: marker.position }) - 1;
        const markerData = { type: 'marker', position: marker.position };
        drawings.push(markerData);
        localStorage.drawings = JSON.stringify(drawings);

        handleMarkerEdits(marker, markerData);
    });

    function handleMarkerEdits(marker, markerData) {
        marker.addListener('dragend', () => {
            //drawings[index].position = marker.position;
            markerData.position = marker.position;
            localStorage.drawings = JSON.stringify(drawings);
        });
    }

    google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
        //circles.push({ center: circle.center, radius: circle.radius });
        //localStorage.circles = JSON.stringify(circles);
        const circleData = { type: 'circle', center: circle.center, radius: circle.radius };
        drawings.push(circleData);
        localStorage.drawings = JSON.stringify(drawings);

        handleCircleEdits(circle, circleData);
    });

    function handleCircleEdits(circle, circleData) {
        circle.addListener('center_changed', () => {
            circleData.center = circle.center;
            localStorage.drawings = JSON.stringify(drawings);
        });

        circle.addListener('radius_changed', () => {
            circleData.radius = circle.radius;
            localStorage.drawings = JSON.stringify(drawings);
        });
    }

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
        drawings.push({ type: 'rectangle', bounds: rectangle.bounds });
        localStorage.drawings = JSON.stringify(drawings);
    });

    google.maps.event.addListener(drawingManager, 'polylinecomplete', polyline => {
        drawings.push({ type: 'polyline', path: polyline.getPath().getArray() });
        localStorage.drawings = JSON.stringify(drawings);
    });

    google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
        drawings.push({ type: 'polygon', path: polygon.getPath().getArray() });
        localStorage.drawings = JSON.stringify(drawings);
    });

    /*
    if (localStorage.markers) {
        markers = JSON.parse(localStorage.markers);
        markers.forEach((pos, index) => {
            setTimeout(() => {
                new google.maps.Marker({
                    position: pos,
                    map: map,
                    animation: google.maps.Animation.DROP
                });
            }, index * 200);
        });
    }

    if (localStorage.circles) {
        circles = JSON.parse(localStorage.circles);
        circles.forEach(circleData => {
            new google.maps.Circle({
                center: circleData.center,
                radius: circleData.radius,
                map: map
            });
        });
    }
    */

    if (localStorage.drawings) {
        drawings = JSON.parse(localStorage.drawings);
        drawings.forEach((drawing, index) => {
            switch (drawing.type) {
                case 'marker':
                    setTimeout(() => {
                        const marker = new google.maps.Marker({
                            position: drawing.position,
                            draggable: true,
                            map: map,
                            animation: google.maps.Animation.DROP
                        });

                        handleMarkerEdits(marker, drawing);
                    }, index * 200);
                    break;
                case 'circle':
                    const circle = new google.maps.Circle({
                        center: drawing.center,
                        radius: drawing.radius,
                        editable: true,
                        map: map
                    });

                    handleCircleEdits(circle, drawing);
                    break;
                case 'rectangle':
                    new google.maps.Rectangle({
                        bounds: drawing.bounds,
                        map: map
                    });
                    break;
                case 'polyline':
                    new google.maps.Polyline({
                        path: drawing.path,
                        map: map
                    });
                    break;
                case 'polygon':
                    new google.maps.Polygon({
                        path: drawing.path,
                        map: map
                    });
                    break;
                default:
                    console.error('Cant reconstitute ', drawing);
            }
        });
    }
};

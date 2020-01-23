const http = require('http');

http.get(process.argv[2], response => {
    response.setEncoding('utf-8');
    let theFullData = '';

    response.on('data', data => {
        theFullData += data;
    });

    response.on('error', console.error);

    response.on('end', () => {
        console.log(theFullData.length);
        console.log(theFullData);
    });
}).on('error', err => console.error('OUTER ON ERROR', err));
const http = require('http');

http.get(process.argv[2], response => {
    response.setEncoding('utf-8');
    /*response.on('data', data => {
        console.log(data);//.toString());
    });
    response.on('error', err => {
        console.error(err);
    });*/

    response.on('data', console.log);
    response.on('error', console.error);

    /*response.on('end', () => {
        console.log('end');
    });*/
}).on('error', err => console.error('OUTER ON ERROR', err));
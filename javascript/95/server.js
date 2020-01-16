const http = require('http');

http.createServer((req, res) => {
    //res.write('Hello World!');
    // res.end();

    //res.setHeader('content-type', 'text/html');
    //res.setHeader('date', new Date('2019-01-01'));
    //res.end('Hello World!');

    res.statusCode = 404;
    res.end('404. Page not found. Try some other page....');
}).listen(80);
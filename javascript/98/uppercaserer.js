const http = require('http');
const map = require('through2-map');

http.createServer((req, res) => {
    console.log('got request');

    if (req.method !== 'POST') {
        res.statusCode = 400;
        return res.end('UPPERCASERER ONLY SUPPORTS POST REQUESTS!!!');
    }

    //req.pipe(map(data => data.toString().toUpperCase())).pipe(res);

    req.on('data', data => {
        res.write(data.toString().toUpperCase());
    });
    req.on('end', () => res.end());

}).listen(process.argv[2]);
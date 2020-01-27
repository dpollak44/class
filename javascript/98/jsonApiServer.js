const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    console.log(req.url);

    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);

    const theDate = new Date(parsedUrl.query.iso);
    let result;

    if (parsedUrl.pathname === '/api/parsetime') {
        result = {
            hour: theDate.getHours(),
            minute: theDate.getMinutes(),
            second: theDate.getSeconds()
        };
    } else if (parsedUrl.pathname === '/api/unixtime') {
        result = { unixtime: theDate.getTime() };
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.statusCode = 404;
        res.end();
    }
}).listen(process.argv[2]);
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/js'//,
    //json: 'application/json'
};

http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/') {
        res.statusCode = 301;
        res.setHeader('Location', '/index.html');
        return res.end();
    }

    //fs.readFile(`public/${req.url}`, (err, fileContents) => {
    const rs = fs.createReadStream(`public/${req.url}`);
    rs.on('error', err => {
        switch (err.code) {
            case 'ENOENT':
                res.statusCode = 404;
                res.setHeader('content-type', 'text/html');
                res.write('<h2 style="color: red">No such page! 404...</h2>');
                break;
            default:
                res.statusCode = 500;
                res.write('<h2 style="color: red">Server Error!</h2>');
                break;
        }
    });

    const ext = path.extname(req.url);
    console.log(ext);
    res.setHeader('content-type', mimeTypes[ext] || mimeTypes['.html']);
    rs.pipe(res);
}).listen(80);
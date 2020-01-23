const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    console.log(req.url);

    const theUrl = url.parse(req.url, true);
    console.log(theUrl);

    res.setHeader('content-type', 'text/html');
    //switch (req.url) {
    switch (theUrl.pathname) {
        case '/':
            res.statusCode = 301;
            res.setHeader('Location', '/index.html');
            break;
        // or could just fallthrough instead of redirect
        case '/index.html':
            res.write('<h2>Welcome to PCS site</h2>');
            break;
        case '/about.html':
            res.write('<h2>PCS is a great place</h2>');
            break;
        case '/sayHello':
            res.write(`Hello ${theUrl.query.name || 'stranger'}`);
            break;
        default:
            res.statusCode = 404;
            res.write('<h2 style="color: red">No such page! 404...</h2>');
    }
    res.end();
}).listen(80);
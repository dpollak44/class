const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    //fs.createReadStream(process.argv[3]).pipe(res);

    const rs = fs.createReadStream(process.argv[3]);
    rs.on('data', data => res.write(data));
    rs.on('end', () => res.end());
}).listen(process.argv[2]);
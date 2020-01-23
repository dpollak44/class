const http = require('http');
const bl = require('bl');

http.get(process.argv[2], response => {
    //response.setEncoding('utf-8');

    response.pipe(bl((err, data) => {
        if (err) {
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));

    response.on('error', console.error);
}).on('error', err => console.error('OUTER ON ERROR', err));
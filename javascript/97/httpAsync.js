const http = require('http');
const results = [];
let completed = 0;

function getHttpData(url, index) {
    http.get(url, response => {
        response.setEncoding('utf-8');
        let theFullData = '';

        response.on('data', data => {
            theFullData += data;
        });

        response.on('error', console.error);

        response.on('end', () => {
            results[index] = theFullData;
            if (++completed === 3) {
                results.forEach(data => console.log(data));
            }
            //console.log(theFullData);
            //console.log(url);
        });
    }).on('error', err => console.error('OUTER ON ERROR', err));
}

for (i = 2; i < 5; i++) {
    getHttpData(process.argv[i], i - 2);
}
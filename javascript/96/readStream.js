const fs = require('fs');

const readStream = fs.createReadStream(process.argv[2], 'utf-8');

let chunks = 0;
readStream.on('data', data => {
    chunks++;
});

/*
setTimeout(() => {
    readStream.on('data', data => {
        console.log('GOT DATA =================>');//, data);
    });
}, 1000);
*/

readStream.on('end', () => {
    console.log(`end - got ${chunks} chunks`);
});

readStream.on('error', error => {
    console.error(error);
});

console.log('file end');
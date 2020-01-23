const fs = require('fs');

const readStream = fs.createReadStream(process.argv[2]);
const writeStream = fs.createWriteStream(process.argv[3]);
let writeStreamFailure = false;

readStream.on('data', data => {
    //if (!writeStreamFailure) { // whats correct way to get this from stream itself?
    if (writeStream.writable.writable) {
        writeStream.write(data);
    }
});

readStream.on('end', () => {
    console.log('read stream end');
    writeStream.end();
});

//readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('write stream finish');
});

readStream.on('error', err => {
    console.error('read stream error', err);
    writeStream.end();
});

writeStream.on('error', err => {
    console.error('write stream error', err);
    writeStreamFailure = true;
});

console.log('file end');
const fs = require('fs');

const writeStream = fs.createWriteStream(process.argv[2]);
writeStream.write('This is a test of writing a file from node');
writeStream.end();
writeStream.on('finish', () => console.log('write complete'));
writeStream.on('error', console.error);

console.log('end of file');
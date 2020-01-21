//fs.readdir('foo');
const fs = require('fs');
//import fs from 'fs';

fs.readFile(process.argv[2], 'utf-8', (err, fileContents) => {
    if (err) {
        return console.error(err);
    }
    const split = fileContents.split('\n');
    console.log(split.length - 1);
});

//console.log('end');
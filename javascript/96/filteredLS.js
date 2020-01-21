const fs = require('fs'),
    path = require('path');

fs.readdir(process.argv[2], (err, files) => {
    if (err) {
        return console.error(err);
    }
    const ext = '.' + process.argv[3];
    files//.filter(file => path.extname(file) === ext)
        //.forEach(file => console.log(file));
        .forEach(file => {
            if (path.extname(file) === ext) {
                console.log(file);
            }
        });
});
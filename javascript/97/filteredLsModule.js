const fs = require('fs'),
    path = require('path');

module.exports = function (dir, extension, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }
        const ext = '.' + extension;
        const filteredFiles = files.filter(file => path.extname(file) === ext)
        callback(null, filteredFiles);
    });
}
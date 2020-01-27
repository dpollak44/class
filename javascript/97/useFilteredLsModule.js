const flsm = require('./filteredLsModule');

flsm(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        return console.error(err);
    }
    files.forEach(file => {
        console.log(file);
    });
})
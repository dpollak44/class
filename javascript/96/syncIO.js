const fs = require('fs');

//const fileContents = fs.readFileSync(process.argv[2]);
//const split = fileContents.toString().split('\n');
const fileContents = fs.readFileSync(process.argv[2], 'utf-8');

const split = fileContents.split('\n');
console.log(split.length - 1);

//console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);

console.log('end');
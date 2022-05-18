var fs = require('fs');
var zlib = require('zlib');

// nén file input.txt to input.txt.gz
// create output stream
fs.createReadStream('input.txt')
    // chaining
    .pipe(zlib.createGzip())
    // piping
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('program end');
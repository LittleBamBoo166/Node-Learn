var fs = require('fs');
var buf = new Buffer(1024);

console.log('going to open an existing file');
fs.open('input.txt', 'r+', (err, fd) => {
    if (err) {
        console.error(err);
    }

    console.log('file opened successfully');
    console.log('going on to read file');

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if (err) {
            console.error(err);
        }

        console.log(bytes + " bytes read");
        // print only read bytes to avoid junk
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
});
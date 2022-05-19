var fs = require('fs');
var buf = new Buffer(1024);

console.log('going to open an existing file');
fs.open('input.txt', 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }

    console.log('file opened successfully');
    console.log('going to read file');

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if (err) {
            return console.error(err);
        }

        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }

        // close the opened file
        fs.close(fd, (err) => {
            if (err) {
                return console.error(err);
            }

            console.log('file closed successfully');
        });
    });
});
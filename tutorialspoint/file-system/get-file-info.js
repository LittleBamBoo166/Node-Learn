var fs = require('fs');

console.log('start getting file info');
fs.stat('input.txt', (err, stats) => {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log('got file info successfully');

    // check file type
    console.log('is file? ' + stats.isFile());
    console.log('is directory? ' + stats.isDirectory());
})
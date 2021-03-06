var fs = require('fs');

// asynchronous read
fs.readFile('input.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log('program end');
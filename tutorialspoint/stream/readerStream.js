var fs = require("fs");
var data = '';

// create a readable stream
var readerStream = fs.createReadStream('input.txt');

// set the encoding to utf-8
readerStream.setEncoding('utf-8');

// handle stream events --> data, end, error
readerStream.on('data', (chunk) => {
    data += chunk;
})
readerStream.on('end', () => {
    console.log(data);
})
readerStream.on('error', (err) => {
    console.log(err.stack);
})

console.log('program end');
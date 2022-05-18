var fs = require('fs');
var data = "I've learned to be ashame of all my scars\nRun away, they say no one'll love you as you are";

// create a writeable stream
var writerStream = fs.createWriteStream('output.txt');

// write the data to to stream with encoding to be utf8
writerStream.write(data, 'utf-8');

// mark the end of file, signal that there no more data writen to writer stream
writerStream.end();

// handle stream events --> finish, error
writerStream.on('finish', () => {
    console.log("Write completed");
})
writerStream.on('error', (err) => {
    console.log(err.stack);
});

console.log("program end");
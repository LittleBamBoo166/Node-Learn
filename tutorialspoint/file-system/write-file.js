var fs = require('fs');

console.log('start writing file');
fs.writeFile('input.txt', "Hello World", (err) => {
    if (err) {
        console.error(err);
    }

    console.log('data written successfully');
    console.log("let's read newly written data");

    fs.readFile('input.txt', (err, data) => {
        if (err) {
            console.error(err);
        }

        console.log('asynchronous read: ' + data.toString());
    });
});
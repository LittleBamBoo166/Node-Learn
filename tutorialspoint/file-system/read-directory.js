var fs = require('fs');

console.log('going to read directory /tmp');
fs.readdir('D:\\Node Learn\\tutorialspoint\\file-system\\tmp', (err, files) => {
    if (err) {
        return console.error(err);
    }

    files.forEach((file) => {
        console.log(file);
    })
})
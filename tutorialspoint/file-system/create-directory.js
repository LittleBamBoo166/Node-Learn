var fs = require('fs');

console.log('going to create directory /tmp/test');
fs.mkdir('D:\\Node Learn\\tutorialspoint\\file-system\\tmp', (err) =>  {
    if (err) {
        return console.error(err);
    }
    console.log('create directory successfully');
});
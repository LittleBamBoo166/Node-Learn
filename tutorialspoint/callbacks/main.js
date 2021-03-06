// Example 1:
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log('Program ended.');

// Example 2:
var fs = require("fs");
fs.readFile('input.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});

console.log('Program ended.');
// flow: readFile() -> console.log('Program ended.') -> fs.callback
var buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

var buf2 = new Buffer("Hello world");
var json = buf.toJSON(buf);

console.log(json);

var buf3 = new Buffer("Simply to learn Node.js");
var buf4 = Buffer.concat([buf2, buf3]);
// var buf4 = Buffer.concat(buf2, buf3); => cause error

console.log("Buf4: " + buf4);
console.log("Compare result: " + buf2.compare(buf3));
// console.log("Compare result: " + Buffer.compare(buf2, buf3)); => err: module not found
console.log("Is buffer? " + Buffer.isBuffer(buf4));

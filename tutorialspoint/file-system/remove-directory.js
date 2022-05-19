var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("D:\\Node Learn\\tutorialspoint\\file-system\\tmp\\test",function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir("D:\\Node Learn\\tutorialspoint\\file-system\\tmp",function(err, files) {
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file) {
         console.log( file );
      });
   });
});
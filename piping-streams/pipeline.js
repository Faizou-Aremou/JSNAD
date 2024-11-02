const fs = require('fs');
const path = require('path');
const { pipeline, Transform } = require('stream');
const rs = fs.createReadStream('./file.txt');
const newFileS = fs.createWriteStream('newFile.txt');
const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});
pipeline(rs, uppercase, newFileS, (err)=>{

});

const Stream = require('stream');

const rs = new Stream.Readable();


rs._read = function () {
    for ( let index = 65; index < 65+26; index++) {
      rs.push(String.fromCharCode(index));
      rs.push('\n');
    }
    rs.push(null);
};

rs.pipe(process.stdout);

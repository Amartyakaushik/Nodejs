const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req,res)=>{
    const filePath = 'FileSystem/zlib.txt';
    const readStream = fs.createReadStream(filePath);
    res.writeHead(200, {
        'Content-Type': 'text/plain', 'Content-encoding':'gzip'
    });

    readStream.pipe(zlib.Gzip()).pipe(res);
    readStream.on('error',(err)=>{
        console.error(err);
        res.statusCode = 500;
        res.end("Internal server error");
    });
});

server.listen(2000);

/*
 feb-27
solving the question but with the help of readStream and pipe method...
as this code is more  concise.
*/
const http = require('http');
const zlib = require('zlib');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        const data = fs.readFile('FileSystem/zlib.txt','utf-8',(err,data)=>{
            if(err){
                console.error(err);
                return;
            }
            zlib.gzip(data, (err,compressedData)=>{
                if(err){
                    console.error(err);
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/plain','Content-Encoding':'gzip'});
                res.end(compressedData);
            })
        });
    }
});

const port = 4000;
server.listen(port,()=> console.log(`your server is runnign on ${port}`));

/*
feb-27
Question is to compress data of a file and display it on the server home page 
here the server home page has pre built feature to decompress the data provided by the user.
*/
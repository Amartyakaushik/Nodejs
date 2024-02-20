const http= require('http');
const fs= require('fs');

const server= http.createServer((req,res)=>{
    if(req.url=='/'){
        const readableStream= fs.createReadStream('FileSystem/demp.txt',{encoding: 'utf-8',highWaterMark: 128});
        const writeableStream=fs.createWriteStream('FileSystem/demo2.txt');
    
        readableStream.on('data',(chunk)=>{
            writeableStream.write(chunk);

            writeableStream.on('finish',()=>{
                console.log('Finished writing the data');
            });

            writeableStream.on('error',(err)=>{
                console.log('error while writing the data:',err);
            });
            writeableStream.end();
        });

        readableStream.on('end',()=>{
            console.log("read all data in the file.");
        });
    
        readableStream.on('error',(err)=>{
            console.log('error while reading the data',err);
        })
        res.writeHead(200,{'Content-Type':'text/plain'});
    }

});

const port=1200;
server.listen(port,()=> console.log(`your server is running on ${port}`));
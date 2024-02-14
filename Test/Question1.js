const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url==='/readfile'){
        try{
            const data=fs.readFileSync('FileSystem/demo.txt','utf');
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('File content'+ data);
        }catch(err){
            console.error(err);
            res.writeHead(400,{'Content-Type':'text/plain'});
        }
    }else{
        res.writeHead(400,{'Content-Type':'text/plain'});
        res.end('404 Not Found');
    }
});

const port=5000;
server.listen(port,()=> console.log(`your server is running on https:// ${port}`));

const http=require('http');
const fs=require('fs');

const server=http.createServer((res,req)=>{
    if(req.method==='GET' && req.url==='/readfile'){
        const message="This is a demo text asyn file";
        fs.writeFile('FileSystem/demo.txt',message,'utf8',(err)=>
        {
            if(err){
                console.error(err);
                return;
            }

            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("File Written Successfully");
        });
    }else{
        res.writeHead(400,{'Content-Type':'text/plain'});
        res.end('404 Not Found');
    }
});

const port=5000;
server.listen(port,()=> console.log(`your server is running on https:// ${port}`));
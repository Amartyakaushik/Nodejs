//Design a NodeJs application where you can submit data through a form on '/submit'
//  route, and GET method, the data when received at backend should be saved in file. 
//  Make use of stream module and URl modules
const http= require('http');
const fs= require('fs');
const url=require('url');

const server= http.createServer((req,res)=>{
    let path= url.parse(req.url,true);
    console.log(path);
    console.log(path.pathname);
    if(path.pathname=='/'){
        let readableStream= fs.createReadStream('submit.html');
        readableStream.pipe(res);
        // readableStream
    }else if(path.pathname=='/submit'){
        // if(req.method=='GET'){}
        let writeableStream=fs.createWriteStream('FileSystem/demo2.txt');
    
            writeableStream.write(path.query.name + "\n");
            writeableStream.write(path.query.email);

        writeableStream.on('finish',()=>{
            console.log('Finished reading data from the file.');
        });
        writeableStream.end();
    }
}).listen(4000);
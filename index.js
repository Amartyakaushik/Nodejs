const http=require('http');
const fs=require('fs');
// const { isUtf8 } = require('buffer');

//  const server = http.createServer((req,res) => {
//     res.end('Hello, this is your Node.js server!');
//  });

// const server = http.createServer((req,res) =>{
//     // const bodyContent = req.body;
//     // const headerContent = req.headers;
//     if(req.url == '/'){
//         fs.readFile('FileSystem/demo.txt','utf-8',(err,data) =>{
//             if(err){
//                 console.error(err);
//                 return;
//             }
//             res.writeHead(200,{'Content-type': 'text/plain'});

//             // res.writeHead(100,{'Content-type': 'text/plain'});

//             // res.writeHead(300,{'Content-type': 'text/plain'});    // displays multiple Choices
//             // res.writeHead(500,{'Content-type': 'text/plain'});   Internal server error...
//             // res.writeHead(400,{'Content-type': 'text/plain'});    this gives a bad request...

//             res.end('File Content:'+ data);
//             // res.end(bodyContent);
//             // res.end(headerContent);
//         })
//     }
// });




// const server=http.createServer((req,res) => {
//     if(req.url === "/"){
        // const message='Hello this is your node js server';
        // fs.writeFile('FileSystem/demp.txt',message,'utf8',(err)=> {
        //     if(err){
        //         console.error(err);
        //         res.writeHead(500,{'Content-Type' : 'txt/plain'});
        //         res.end('Internal server error');
        //         return;
        //     }
        // res.end(message);
    
//             fs.readFile("FileSytem/demo.txt", 'utf-8',(err,data)=> {
//                 if(err){
//                     console.error(err);
//                     return;
//                 }
//                 // res.write(100,)
//                 res.writeHead(200,{'Content-Type' : 'text/plain'});
//                 res.end(data);

//             // })
//         });
//     }
    
// });


// const server=http.createServer((req,res) => {
//     if(req.url === "/"){
//         try{
//             const data=fs.readFileSync("FileSystem/demo.txt", 'utf8'); 
//             res.writeHead(200,{'Content-Type' : 'text/plain'});
//             res.end('File Content' + data);
//         }catch (err){
//             console.error(err);
//             res.writeHead(500,{'Content-Type':'text/plain'});
//             res.end('Internal server error');
//         }
//     }
    
// });


// const server=http.createServer((req,res) => {
//     if(req.url === "/"){
//         const message="This file is written using sync!";
//         // fs.writeFileSyn('FileSystem/demo.txt','utf8'); 
//         try{
//             fs.writeFileSync("FileSystem/demo.txt", message,'utf8'); 
//             res.writeHead(200,{'Content-Type' : 'text/plain'});
//             res.end('File Content' + message);
//         }catch (err){
//             console.error(err);
//             res.writeHead(500,{'Content-Type':'text/plain'});
//             res.end('Internal server error');
//         }
//     }
    
// });

// // Appending file in Asynchronous Manner
// const server=http.createServer((req,res) => {
//     if(req.url === "/"){
//         const message='Hello this is appending using Callback';
//         fs.appendFile('FileSystem/demo.txt',message +'\n','utf8',(err)=> {
//             if(err){
//                 console.error(err);
//                 res.writeHead(500,{'Content-Type' : 'text/plain'});
//                 res.end('Internal server error');
//                 return;
//             }else{
//                 res.writeHead(200,{'Content-Type' : 'text/plain'});
//                 res.end('FIle Content Append: ' + message);

//             }
//         });
//     }
    
// });


// const server=http.createServer((req,res) => {
//     if(req.url === "/"){
//         try{
//             const data=fs.readFileSync("FileSystem/home.html", 'utf8'); 
//             res.writeHead(200,{'Content-Type' : 'text/html'});
//             res.end('File Content' + data);
//         }catch (err){
//             console.error(err);
//             res.writeHead(500,{'Content-Type':'text/html', 'Content-Type':' image/jpeg','Content-Type' : 'application/javascript'});
//             res.end('Internal server error');
//         }
//     }
    
// });

// const server=http.createServer((req,res)=>{
//     if(req==='/'){
//         fs.readFile("Public/data.json",'utf8',(err,data)=>{
//             if(err){
//                 console.error(err);
//                 res.end('Internal server error');
//                 return;
//             }
//             res.writeHead(200,{'Content-Type':'application/json'});
//             res.end(data);
//         });
//     }
// });


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

 server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));


//  status code : 200  -> it means it's working fine.
//  100: information
// 3xx: Redirection
// 4xx: Client Error
// 5xx: Server Error

// mdn web doc
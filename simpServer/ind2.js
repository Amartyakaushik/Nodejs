// const server=http.createServer((req,res) => {
//     if(req.url === "/"){
//         const message='Hello this is your node js server';
//         fs.writeFile('FileSystem/home.html',message,'utf8',(err)=> {
//             if(err){
//                 console.error(err);
//                 res.writeHead(500,{'Content Type' : 'html/plain'});
//                 res.end('Internal server error');
//                 return;
//             }
    
//             // fs.readFile("FileSytem/home.html", 'utf-8',(err,data)=> {
//             //     if(err){
//             //         console.error(err);
//             //         return;
//             //     }
//                 // res.write(100,)
//                 res.writeHead(200,{'Content Type' : 'text/html'});
//                 res.end(message);
//             // })
//         });
//     }
    
// });


const server=http.createServer((req,res) => {
    if(req.url === "/"){
        try{
            const data=fs.readFileSync("FileSystem/home.html", 'utf8'); 
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end('File Content' + data);
        }catch (err){
            console.error(err);
            res.writeHead(500,{'Content-Type':'text/html'});
            res.end('Internal server error');
        }
    }
    
});


// const server=http.createServer((req,res) => {
//     if(req.url === "/"){
//         const message="This file is written using sync!";
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
//         fs.appendFile('FileSystem/demo.txt',message,'utf8',(err)=> {
//             if(err){
//                 console.error(err);
//                 res.writeHead(500,{'Content Type' : 'text/plain'});
//                 res.end('Internal server error');
//                 return;
//             }else{
//                 res.writeHead(200,{'Content Type' : 'text/plain'});
//                 res.end(message);

//             }
//         });
//     }
    
// });

 const port=9000;

 server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
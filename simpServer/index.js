const http=require('http');
const fs=require('fs');

//  const server = http.createServer((req,res) => {
//     res.end('Hello, this is your Node.js server!');
//  });

const server = http.createServer((req,res) =>{
    const bodyContent = req.body;
    const headerContent = req.headers;
    if(req.url == '/'){
        fs.readFile('FileSystem/demo.txt','utf-8',(err,data) =>{
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200,{'Content-type': 'text/plain'});

            // res.writeHead(100,{'Content-type': 'text/plain'});

            // res.writeHead(300,{'Content-type': 'text/plain'});    // displays multiple Choices
            // res.writeHead(500,{'Content-type': 'text/plain'});   Internal server error...
            // res.writeHead(400,{'Content-type': 'text/plain'});    this gives a bad request...

            res.end('File Content:'+ data);
            res.end(bodyContent);
            res.end(headerContent);
        })
    }
});

 const port=4000;

 server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));


//  status code : 200  -> it means it's working fine.
//  100: information
// 3xx: Redirection
// 4xx: Client Error
// 5xx: Server Error

// mdn web doc

const express = require('express');
const app = express();
const fs = require('fs');
//Route for serving form to user
app.get('/', (req, res) => {
    fs.readFile('submit.html','utf-8', (err, data) =>{
    if(err){
        console.log(err);
        res.end("Please check console");
        return;

    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    }
})
});

//Route for handling Submit Route
app.get('/submit',(req, res)=>{
    const data = req.query;
    var s = JSON.stringify(data);
    fs.writeFile('FileSystem/example.txt',s,'utf-8',(err)=>{
        if(err){
            console.error(err);
            return;
        }
        res.end(s);
    })
});
const port = 4000;
app.listen(port,()=> console.log(`your server is running on https://${port}`));
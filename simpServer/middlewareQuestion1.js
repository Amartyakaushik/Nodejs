const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    fs.readFile('submit.html','utf-8', (err,data)=>{
        if(err){
            console.log("Error");
            console.error(err);
            return;
        }else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    })
});

app.post('/submit',(req,res)=>{
    const d = req.body;
    var data = JSON.stringify(d);
    fs.writeFile('FileSystem/middlewarefile.txt',data,'utf-8',(err)=>{
        if(err){
            console.error(err);
            return;
        }
        res.end(data);
    })
});

const port= 2000;
app.listen(port,()=> console.log(`Your server is running on https://${port}`));
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/sec',(req,res)=>{
    res.send('This is Amartya Kaushik');
});

app.listen(port, ()=>console.log(`Your server is running on ${port}`));

// feb-27: added this code to test the functionality of express.js 
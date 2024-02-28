const express = require('express');
const app = express();

app.use((req,res)=>{
    console.log('This is a middleware function!');
    next();
});


app.get('/',(req,res)=>{
    res.send('Hello World');
});

// app.use((req,res)=>{
//     console.log('This is second middleware2 funciton!...');
//     next();
// });

const port = 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

// feb-28
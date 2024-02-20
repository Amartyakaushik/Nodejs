// STREAM module
// this is a inbuilt module in node js which is used to read or write data in small chunks instead of writing whole data at once... (here we also decide the size of the chunk in bytes.)...
const fs= require('fs');
// const readableStream = fs.createReadStream('FileSystem/demp.txt',{encoding: 'utf-8',highWaterMark: 64});
// readableStream.on('data',(chunk)=> {
//     console.log("received chunk of data");
//     console.log(chunk);
// });

// readableStream.on('end',()=>{
//     console.log("completed reading the file");
// });

// readableStream.on('error' ,(err)=>{
//     console.log('Eroor reading data:',err);
// });

const writeableStream=fs.createWriteStream('FileSystem/demo.txt');
const data=['Hello, world! \n','This is a test\n'];
data.forEach(chunk =>{
    writeableStream.write(chunk);
});

writeableStream.on('finish',()=>{
    console.log('Finished writing data to the file.');
});

writeableStream.on('error',(err)=>{
    console.log('Error writing data:',err);
})

writeableStream.end();
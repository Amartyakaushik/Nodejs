const zlib = require('zlib');
const input = 'Hello, World!';
zlib.gzip(input, (err,compressedData)=>{
    if(err){
        console.error('Error compressing error: ',err);
        return;
    }
    console.log(compressedData);
});

zlib.gunzip(input,(err, decompressedData)=>{
    if(err){
        console.error('Decompressing error: ',err);
        return;
    }
    console.log(decompressedData);
});

// feb-27
/* Understanding functionality of zlib 
-> it has mainly two methods 
1) gzip to compress data... 
2) gunzip to decompress the compressedData... */
const buffer= Buffer.alloc(4);
console.log(buffer);

// Writing data to the buffer
buffer.write('Hello','utf-8');
console.log(buffer);       // return hexadecimal value of the buffer characters... in the terminal

// Reading data from the buffer
const data=buffer.toString('utf-8');
console.log(data);     // return the original string format of the buffer chararcter

// Concatinating buffer
const buffer2 = Buffer.from('Hello','utf-8');
const buffer3= Buffer.from('World','utf-8');
const concatenateBuffer = Buffer.concat([buffer2 , buffer3]);
console.log(concatenateBuffer.toString('utf-8'));
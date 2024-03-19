/*Write a simple Socket.lO chat application where multiple users can connect and exchange messages in real-time. The applicatign should have the following features:
1PMT
• display a chat  interface where users can see all the messages sent
by other users.
• Allow users to enter their name when they join the chat.
• Display the names of users along with their messages.
• Implement a feature to notify all users when a new user joins or leaves the chat.
*/
const express = require('express');
const socketIO= require('socket.io');
const path = require('path');
const { Socket } = require('dgram');
const app = express();
const server = app.listen(3000, ()=>{
    console.log("server started...");
});

const io = socketIO(server);

app.use(express.static(path.join( __dirname)))

// here express.static... is the Builtin middleware to serve the client...  (as html and css files are static.)

io.on('connection',(Socket)=>{
    // the socket  represents every single client
    console.log("A user has connected to server");
    Socket.on('chat message', msg=>{
        io.emit( 'chat message', msg);
    })
})

// everytime client and server is connnecting a event i.e. "connection" is invoked...

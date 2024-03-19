// Import required modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Create express app and server
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = socketIO(server);

// Store connected users
let users = [];

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Listen for Socket.IO connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Notify all users when a new user joins
    io.emit('user joined', { users });

    // Listen for new messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', { user: socket.username, message: msg });
    });

    // Set username and notify all users
    socket.on('set username', (username) => {
        socket.username = username;
        users.push(username);
        io.emit('user joined', { users });
    });

    // Listen for disconnections
    socket.on('disconnect', () => {
        console.log('A user disconnected');
        users = users.filter(user => user !== socket.username);
        io.emit('user left', { users });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

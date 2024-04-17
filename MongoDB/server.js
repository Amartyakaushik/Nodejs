const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 4000;
// 17-april
require('dotenv').config();
// middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, 'Mongo DB')));

// 17
const mongoURI = process.env.MONGO_URI;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'user.html'));
});

mongoose.connect(mongoURI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:',err));

// Define User Schema
const  userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.get('/users', (req, res) => {
    User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({
        message: err.message
    }));
})

// now define a user to post some data through postman 

app.post('/users', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user.save()
    .then(newUser => res.status(201).json(newUser))
    .catch(err => res.status(400).json({message: err.message}));
});

// app.put('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     const updatedData = {
//         name: req.body.name,

//     };

//     User.findByIdAndUpdate(userId,)
// })


app.put('/users/:id', (req,res)=>{
    const userId = req.params.id;
    const updateData = {
        name: req.body.name,
        email: req.body.password,
        password: req.body.password
    };
    User.findByIdAndUpdate(userId, updateData, { new: true })
    .then (updatedUser => {
        if(!updatedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.json(updatedUser);
    })
    .catch(err=>res.status(400).json({message: err.message}));
});

app.delete('/users/:id',(req,res)=>{
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
    .then(deletedUser => {
        if(!deletedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.json({message: 'User deleted successfully'});
    })
    .catch(err=> res.status(400).json({message: err.message}));
});

// const fetchUsers = () =>{

// }

// users.forEach(user => {
//     const li = document.createElement('li');
//     li.textContent = `
//     `
// });
app.listen(port, () => console.log(`Your server is running on ${port}`));
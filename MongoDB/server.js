const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

// middleware
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/usermanagement_db')
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

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = {
        name: req.body.name,

    };

    User.findByIdAndUpdate(userId,)
})

app.listen(port, () => console.log(`Your server is running on ${port}`));
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');

const app = express();

// Enable CORS for frontend-backend communication
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/assignment-7';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Register endpoint
app.post('/register', async (req, res) => {
    console.log('called');
    const { username, password, email, fullname } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists!' });
        }

        const newUser = new User({ username, password, email, fullname });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json({ message: 'Login successful', username: user.username });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error logging in', error });
    }
});

// Fetch user data endpoint
app.get('/users', async (req, res) => {
    const { username } = req.query;

    try {
        const user = await User.findOne({ username });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Error fetching user', error });
    }
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

// Start server on port 5000
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});

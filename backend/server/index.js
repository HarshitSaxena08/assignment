const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());


// const app = express();
const PORT = 5000;

// Connect to MongoDB 

mongoose.connect("mongodb://127.0.0.1:27017/registration",{ useNewUrlParser:true, useUnifiedTopology : true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Register endpoint
app.post('/register', async (req, res) => {
  const { name, dob, email, password } = req.body;
  try {
    const user = new User({ name, dob, email, password });
    await user.save();
    res.status(200).send('Registration successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Registration failed');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }
    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'secret');
    res.status(200).json({ token, user: { name: user.name, email: user.email, dob: user.dob } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Login failed');
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

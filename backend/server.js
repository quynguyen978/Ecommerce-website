const express = require('express');
const cors = require('cors');
const User = require('./models/User.js');
const createUser = require('./Controller/userController/userCreate.js');
const userLogin = require('./Controller/userController/userLogin.js');
const jwt = require('jsonwebtoken');
const connectMongoose = require('./config/mongoosedb.js');
const  addToCart  = require('./Controller/userController/userProducts.js')
const app = express();
const port = process.env.PORT || 5000;
connectMongoose();
// middleware
app.use(cors());
app.use(express.json()); // Correct middleware for parsing JSON


// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new user
app.post('/users', async (req, res) => {
  console.log('request', req.body)
  createUser(req, res);
});

// Login route
app.post('/login', async (req, res) => {
  console.log('Received login request:', req.body);
  userLogin(req, res);
  
});

// Product route
app.post('/products', async(req, res) => {
  addToCart(req, res);
})

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Corrected message
});


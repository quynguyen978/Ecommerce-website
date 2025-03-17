require('dotenv').config();
const express = require('express');
const cors = require('cors');
const createUser = require('./Controller/userController/userCreate.js');
const userLogin = require('./Controller/userController/userLogin.js');
const connectMongoose = require('./config/mongoosedb.js');
const  addToCart  = require('./Controller/userController/userProducts.js');
const getUserCart = require('./Controller/userController/userCart');
const cartDeleted = require('./Controller/userController/userDeleteCart.js');
const updateCartItems = require('./Controller/userController/userUpdateCart.js');
const billingAddress = require('./Controller/userController/billingAddress.js');
const checkout = require('./Controller/userController/checkout.js');
const tokenVerify = require('./middlewares/tokenVerify.js');
const emailVerify = require('./middlewares/emailVerify.js');

const app = express();
const port = process.env.PORT || 5000;
connectMongoose();
// middleware
app.use(cors({ origin: 'https://your-frontend.netlify.app',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
 })); // Allow frontend domain
app.use(express.json()); // Correct middleware for parsing JSON

// Route to create a new user
app.post('/users', createUser);

// Login route
app.post('/login', userLogin);

// Product route
app.post('/products', addToCart);

// deleted items in Cart
app.post ('/cart/deleted', cartDeleted);

// updated cart
app.post('/cart/updated', updateCartItems);

// add user address
app.post('/user/billingAddress', billingAddress);

// get user's cart
app.get('/cart/:userId', getUserCart);

// verify email
app.get('/email/verify', emailVerify);

// token verify
app.get('/protected', tokenVerify);
// payment 
app.post('/create-checkout-session', checkout);
// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Corrected message
});


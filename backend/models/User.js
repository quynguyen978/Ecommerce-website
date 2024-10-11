
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// define user Schema
const userSchema = new mongoose.Schema({
      fullName: {
            type: String,
            required: true,
      }, 
      email: {
            type: String,
            required: true, 
            unique: true,
      }, 
      password: {
            type: String, 
            required: true,
      },
      phoneNumber: {
            type: String,
      },
      cart: [ {
            product: {  type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // reference to Product
            name: { type: String, },
            quantity: { type: Number, required: true }, // quantity of product
          }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;

const mongoose = require('mongoose');
// const { boolean } = require('zod');

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
      emailVeried: {
            type: Boolean,
            default: false,         //does not verify when register an account
      },
      cart:
       [ {
            product: {  type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // reference to Product
            name: { type: String },
            image: { type: String },
            price: { type: Number },
            quantity: { type: Number, required: true }, // quantity of product
          }],
      address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address'},
      createAt: {
            type: Date, 
            default: Date.now,
      }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

const mongoose = require('mongoose');

// address schema
const billingAddress = new mongoose.Schema({
      fullName: {type: String, require: true},
      email: {type: String, require: true},
      phone: {type: String},
      address: { type: String, require: true},
});

const Address = mongoose.model('Address', billingAddress);
module.exports = Address;
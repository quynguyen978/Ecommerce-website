const mongoose = require('mongoose');

// product schema
const productSchema = new mongoose.Schema({
      name: { type: String, require: true },
      image: { type: String},
      price: { type: Number, require: true },
      category: String,
      quantity: { type: Number, require: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true }
});
 
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const productSchema = new Schema({
  // sql - foreign key reference
  category: {
    type: Schema.Types.ObjectId, 
    required: true
  }, 
  name: {
      type: String, 
      required: true, 
      minlength: 2, 
      maxlength: 128
  }, 
  price: {
      type: Number, 
      required: true, 
      min: 1
  }, 
  description: {
      type: String, 
      required: true, 
      minlength: 5, 
      maxlength: 1000
  }, 
  stock: {
      type: Number, 
      required: true, 
      min: 0
  }, 
  codEligible: {
      type: Boolean, 
      required: true, 
      enum: [true, false], 
      default: true
  },
  createdAt: {
      type: Date, 
      default: Date.now
  }
}); 

const Product = mongoose.model('Product', productSchema); 

module.exports = {
    Product
}
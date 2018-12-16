const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const shorthash = require('shorthash')

const productSchema = new Schema({
  // sql - foreign key reference

  category: {
    type: Schema.Types.ObjectId, 
    required: true,
    ref: 'Category'
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
      default: true, 
      validate: {
          validator: function(value){
                return !(this.price >= 25000 && this.codEligible)
          }, 
          message: function(){
            return 'cod not eligible if product price is greater than 25000'
          }
      }
  },
  createdAt: {
      type: Date, 
      default: Date.now
  },
  code: {
      type: String, 
      required: true
  }
}); 


productSchema.methods.shortInfo = function() {
    // let product = this; 
    console.log(this); 
    return {
        _id: this._id, 
        name: this.name, 
        price: this.price
    }
}

productSchema.pre('validate', function(next){
    let product = this
    let code = shorthash.unique(product._id.toString())
    product.code = `DCT-${code}`
    next()
})

// productSchema.pre('validate', function(next){
//     console.log('im called before validation')
//     next()
// })

// productSchema.post('validate', function(){
//     console.log('im called after validation')
// })

// productSchema.pre('save', function(next){
//     console.log('im called before saving')
//     next()
// })

// productSchema.post('save', function(){
//     console.log('im called after saving')
// })

const Product = mongoose.model('Product', productSchema); 

module.exports = {
    Product
}
const  mongoose = require('mongoose')
const Schema = mongoose.Schema

// CartLineItem.findById(1).populate('product')

const cartLineItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId, 
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
})

// business logic

// CartLineItemSchema.methods 
// CartLineItemSchema.statics
// cartLineItemSchema.pre('save', function(){})

const CartLineItem = mongoose.model('CartLineItem', cartLineItemSchema)

module.exports = {
    cartLineItemSchema,
    CartLineItem
}
const mongoose = require('mongoose')
const shorthash = require('shorthash')
const { User } = require('./user')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderDate: {
        type: Date, 
        default: Date.now
    },
    orderNumber: {
        type: String,
        required: true
    }, 
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    }, 
    total: {
        type: Number
    }, 
    status: {
        type: String, 
        enum: ['open', 'confirmed', 'delivered'], 
        default: 'confirmed'
    },
    orderLineItems: [
        { 
            product: {
                type: Schema.Types.ObjectId, 
                ref: 'Product'
            }, 
            quantity: {
                type: Number
            },
            price: {
                type: Number
            }
        }
    ]
})

orderSchema.pre('validate', function(next){
    let order = this 
    order.orderNumber = `DCT-${shorthash.unique(order._id.toString())})`
    next()
})

orderSchema.pre('save', function(next){
    let order = this 
    User.findOne({ _id: order.user }).populate('cartLineItems.product').then(function(user){
        // console.log(user.cartLineItems)
        user.cartLineItems.forEach(function(lineItem){
            let productData = {
                product: lineItem.product._id ,
                quantity: lineItem.quantity, 
                price: lineItem.product.price
            }
            order.orderLineItems.push(productData)
        })
        next()
    }).catch(function(err){
        return new Promise(function(resolve, reject){
            reject(err)
        })  
    })

})

const Order = mongoose.model('Order', orderSchema)

module.exports = {
    Order
}
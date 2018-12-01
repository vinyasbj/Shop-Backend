const express = require('express')
const router = express.Router() 
const { Order } = require('../models/order')
const { authenticateUser } = require('../middlewares/authentication')

// localhost:3000/orders
router.get('/', authenticateUser, function(req, res){
    const currentUser = req.user 
    Order.find({ user: currentUser._id}).then(function(orders) {
        res.send(orders)
    }).catch(function(err) {
        res.send(err)
    })
})

router.post('/', authenticateUser, function(req, res){
    const currentUser = req.user 
    let order = new Order()
    // ensuring that the current order belongs to the user
    order.user = currentUser._id 
    order.save().then(function(order){
        res.send({
            order, 
            notice: 'successfully created an order'
        })
    }).catch(function(err){
        res.send(err)
    })
})

module.exports = {
    ordersController: router
}
const express = require('express')
const router = express.Router() 
const { User } = require('../models/user')
const { CartLineItem } = require('../models/cart_line_item.js') 
const { authenticateUser } = require('../middlewares/authentication')


// register
// post /users
router.post('/', function(req, res){
    let body = req.body
    let user = new User(body)
    user.save().then(function(user){
        res.send({
            user, 
            notice: 'successfully registered'
        })
    }).catch(function(err){
        res.send(err)
    })
})

// login
// post /users/login
router.post('/login', function(req, res){
    let body = req.body; 
    // User.findOne({email: body.email, password: body.password})
    User.findByCredentials(body.email, body.password).then(function(user){
        return user.generateToken()
    })
    .then((token) => {
        res.header('x-auth', token).send()
    })
    .catch(function(err){
        res.status(401).send(err)
    })
})

// private routes
// users/accounts
router.get('/accounts', authenticateUser, function(req, res){
    const user = req.user 
    res.send(user)
})

// GET users/cart_line_items
router.get('/cart_line_items', authenticateUser, function(req,res) {
    let user = req.user
    res.send(user.cartLineItems)
})

// POST users/cart_line_items
router.post('/cart_line_items', authenticateUser, function(req, res) {
    const body = req.body 
    const user = req.user
    const cartLineItem = new CartLineItem(body)

    user.cartLineItems.push(cartLineItem)

    user.save().then(function(user){
        res.send({
            cartLineItem, 
            notice: 'Successfully added the product to your cart'
        })
    }).catch(function(err) {
        res.send(err)
    })
})


// PUT users/cart_line_items/:id

// DELETE users/cart_line_items/:id


module.exports = {
    usersController: router
}
const express = require('express')
const router = express.Router() 
const { User } = require('../models/user') 

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

const authenticateUser = (req, res, next) => {
    const token = req.header('x-auth')
        User.findByToken(token).then((user) => {
            req.user = user 
            req.token = token
            next()
        }).catch((err) => {
            res.send({
                notice: err
            })
        })
}

// private routes
// users/accounts
router.get('/accounts', authenticateUser, function(req, res){
    const user = req.user 
    res.send(user)
})


module.exports = {
    usersController: router
}
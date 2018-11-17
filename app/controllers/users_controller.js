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

module.exports = {
    usersController: router
}
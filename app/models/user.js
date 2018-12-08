const mongoose = require('mongoose')
const validatePackage = require('validator')
const Schema = mongoose.Schema 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { cartLineItemSchema } = require('./cart_line_item')

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 4, 
        maxlength: 24, 
        unique: true,
        trim: true
    },
    password: {
        type: String, 
        required: true, 
        minlength: 8,
        maxlength: 128,
        trim: true 
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true,
        trim: true, 
        // TODO 
        // custom validation to determine the format
        validate: { // defines your custom validation for a field
            validator: function(value) { // if function returns false then there is an error
                return validatePackage.isEmail(value)
            },
            message: function() { // message used to show to the user
                return 'invalid email format'
            }
        }
    },
    mobile: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        validate: {
            validator: function(value){
                return validatePackage.isNumeric(value)
            }, 
            message: function(){
                return 'invalid mobile format'
            }
        }
        // TODO // custom validation to check format of mobile
    }, 
    tokens: [
       {
           token: {
               type: String
           }
       }
    ],
    cartLineItems: [cartLineItemSchema]
})


// [ { product: 1, quantity: 1}, { product: 2, quantity: 1} ]
// tokens = [{ _id: 1, token: '12345sdfasdf' }, {_id: 22, token: 'sadfasdf4567}]


// npm install --save bcryptjs 

// mongoose middleware functions - pre hooks or post hooks
userSchema.pre('save', function(next){
    let user = this
    if(user.isNew){
        bcrypt.genSalt(10).then(function (salt) {
            bcrypt.hash(user.password, salt).then(function (encrypted) {
                user.password = encrypted
                next()
            })
        })
    } else {
        next()
    }
    
})

userSchema.statics.findByCredentials = function(email, password){
    let User = this 
    return User.findOne({ email: email}).then(function(user){
        if(!user){
            return Promise.reject('invalid email or password')
            // return new Promise(function(resolve, reject){
            //     reject('invalid email or password')
            // })
        }

        return new Promise(function(resolve, reject){
            bcrypt.compare(password, user.password).then(function(res){
                if(res) {
                    resolve(user)
                } else {
                    reject('invalid password')
                }
            })
        })
        
        // return bcrypt.compare(password, user.password).then(function(result){
        //     if(result) {
        //         return Promise.resolve(user)
        //     } else {
        //         return Promise.reject('invalid email or password')
        //     }
        // })

        // [] / new Array()
        // {} / new Object()

    })
}


userSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        userId: user._id
    }
    const token = jwt.sign(tokenData, 'supersecret') 
    user.tokens.push({
        token
    })
    return user.save().then((user) => {
        return Promise.resolve(token)
    })
}

userSchema.statics.findByToken = function(token){
    let User = this 
    let tokenData 
    try {
        tokenData = jwt.verify(token, 'supersecret')
    } catch (e) {
        return Promise.reject(e)
    }

    return User.findOne({
        '_id': tokenData.userId,
        'tokens.token': token
    })

}

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}
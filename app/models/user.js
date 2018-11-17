const mongoose = require('mongoose')
const validatePackage = require('validator')
const Schema = mongoose.Schema 
const bcrypt = require('bcryptjs')

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
    }
})


// npm install --save bcryptjs 

// mongoose middleware functions - pre hooks or post hooks
userSchema.pre('save', function(next){
    let user = this
    bcrypt.genSalt(10).then(function(salt){
        bcrypt.hash(user.password, salt).then(function(encrypted){
            user.password = encrypted 
            next()
        })
    })
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}
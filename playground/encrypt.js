const bcrypt = require('bcryptjs')

const password = 'secret123'

bcrypt.genSalt(10).then(function(salt){
    console.log(salt)
    bcrypt.hash(password, salt).then(function(encryptedPassword){
        console.log(encryptedPassword)
    })
})
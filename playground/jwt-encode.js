const jwt = require('jsonwebtoken')

const tokenData = {
    userId: 1
}

const token = jwt.sign(tokenData, 'supersecret')

console.log(token)
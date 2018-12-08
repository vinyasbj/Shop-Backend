const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU0MzA0NjExOH0.dxLyECJTcJTfQFPBsiP9jdlINx-NrkQVhJ-NVPsK5ws'

const tokenData = jwt.verify(token, 'supersecret')
console.log(tokenData)

// 1st - no token is sent
// const token = ''
// const tokenData = jwt.verify(token, 'supersecret') // jwt must be provided
// console.log(tokenData)

// 2nd - token sent but manipulate
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEdefsdfmlhdCI6MTU0MzA0NjExOH0.dxLyECJTcJTfQFPBsiP9jdlINx-NrkQVhJ-NVPsK5ws'
// const tokenData = jwt.verify(token, 'supersecret') // Unexpected token  in JSON
// console.log(tokenData)

// 3d - 

// const token = '12345'
// const tokenData = jwt.verify(token, 'supersecret') // jwt malformed
// console.log(tokenData)
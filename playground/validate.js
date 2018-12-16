const validator = require('validator')

const email1 = 'a'
const email2 = 'ani@gmail.com'

const mobile1 = '123456aaf'
const mobile2 = '123456789'

console.log(validator.isEmail(email1))
console.log(validator.isEmail(email2))

console.log(validator.isNumeric(mobile1))
console.log(validator.isNumeric(mobile2))
const bcrypt = require('bcryptjs')

const encryptedPassword = '$2a$10$ZycN87KPVnT7leM6zo/nq.5kTAQ32NKNBr8O5iSG97jeoluFfyvEK'

const userPassword = 'secret123'

bcrypt.compare(userPassword, encryptedPassword).then(function(result){
    console.log(result)
})

// node tasks/setup-categories
require('../config/db')
const faker = require('faker')
const { Category } = require('../app/models/category')

for(let i = 0; i < 10; i++){
    let fakeCategory = {
        name: faker.commerce.department()
    }

    let c = new Category(fakeCategory)
    c.save().then((category) => {
        console.log(category)
    }).catch((err) => {
        console.log(err)
    })
}

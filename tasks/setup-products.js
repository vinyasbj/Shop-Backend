// node tasks/setup-products

require('../config/db')
const faker = require('faker')
const { Category } = require('../app/models/category')
const { Product } = require('../app/models/product')
   
    Category.find().then((categories) => {
        let category
        for (let i = 0; i < 1000; i++) {
            category = categories[faker.random.number(categories.length - 1)]
            let fakeProduct = {
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                description: faker.lorem.paragraph(),
                stock: faker.random.number(100),
                codEligible: faker.random.boolean(),
                category: category._id
            }

            let product = new Product(fakeProduct)
            product.save()
                .then(product => console.log(product))
                .catch(err => console.log(err))
            }
    })

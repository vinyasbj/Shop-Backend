const express = require('express'); 
const router = express.Router(); 
const { booksController } = require('../app/controllers/books_controller');
const { categoriesController } = require('../app/controllers/categories_controller'); 
const { productsController } = require('../app/controllers/products_controller');
const { usersController } = require('../app/controllers/users_controller')

router.use('/books', booksController); 
router.use('/categories', categoriesController); 
router.use('/products', productsController); 
router.use('/users', usersController)

module.exports = {
    routes: router
}
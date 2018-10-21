const express = require('express'); 
const router = express.Router(); 
const { booksController } = require('../app/controllers/books_controller');

router.use('/books', booksController); 

module.exports = {
    routes: router
}
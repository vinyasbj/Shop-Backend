const express = require('express'); 
const booksController = express.Router(); 
const { Book } = require('../models/book'); 

// localhost:3000/books/
booksController.get('/', (req, res) => {
    res.send(Book.all()); 
}); 

// localhost:3000/books/:id
booksController.get('/:id', (req, res) => {
    let id = req.params.id; 
    let book = Book.findById(id); 
    if(book) {
        res.send(book); 
    } else {
        res.send({
            notice: 'book not found'
        })
    }
});

module.exports = {
    booksController
}
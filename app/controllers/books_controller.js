const express = require('express'); 
const router = express.Router(); 
const { Book } = require('../models/book'); 

router.get('/', (req, res) => {
    res.send(Book.all()); 
}); 

router.get('/:id', (req, res) => {
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
    booksController: router
}
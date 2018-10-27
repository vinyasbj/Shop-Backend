const express = require('express'); 
const router = express.Router(); 
const { Product } = require('../models/product'); 

router.get('/', (req, res) => {
    Product.find().then((products) => {
        res.send(products); 
    }).catch((err) => {
        res.send(err); 
    }); 
}); 

router.get('/:id', (req, res) => {
    let id = req.params.id; 
    Product.findById(id).then((product) => {
        if(!product) {
            res.send({
                notice: 'record not found'
            })
        }
        res.send(product); 

    }).catch((err) => {
        res.send(err); 
    })
})

router.post('/', (req, res) => {
    let body = req.body; 
    let product = new Product(body); 
    product.save().then((product) => {
        res.send({
            product, 
            notice: 'Successfully created a product'
        }); 
    }).catch((err) => {
        res.send(err); 
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id; 
    Product.findByIdAndDelete(id).then((product) => {
        if(!product) {
            res.send({
                notice: 'record not found'
            })
        }

        res.send({
            product, 
            notice: 'Successfully deleted a product'
        })
    })
})

module.exports = {
    productsController: router
}
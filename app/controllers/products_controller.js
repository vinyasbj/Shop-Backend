const express = require('express'); 
const router = express.Router(); 
const { Product } = require('../models/product'); 
const { validateID } = require('../middlewares/utilities'); 


router.get('/', (req, res) => {
    // popluate works on array of objects
    Product.find().populate('category').then((products) => {
        res.send(products); 
    }).catch((err) => {
        res.send(err); 
    }); 
}); 

// middlewares 
router.get('/:id', validateID, (req, res) => {
    console.log(req.myData); 
    let id = req.params.id; 
    // populate works on a single
    Product.findById(id).populate('category').then((product) => {
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

router.delete('/:id', validateID, (req, res) => {
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


// products/id/short
// info of product like the name id and price

router.get('/:id/short', validateID, (req, res) => {
    let id = req.params.id; 
    Product.findById(id).then((product) => {
        // introducing our own instance methods
        res.send(product.shortInfo()); 
    });
}); 

// products/short/all 
router.get('/short/all', (req, res) => {
    Product.find().then((products) => {
        res.send(products.map(product => product.shortInfo()))
    })
})

module.exports = {
    productsController: router
}
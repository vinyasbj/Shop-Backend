const express = require('express'); 
const router = express.Router(); 
const { Category } = require('../models/category'); 
const { Product } = require('../models/product'); 
const { validateID } = require('../middlewares/utilities'); 

//GET localhost:3000/categories/
router.get('/', (req, res) => {
    Category.find().then((categories) => {
        res.send(categories); 
    }).catch((err) => {
        res.send(err); 
    });
});

// POST localhost:3000/categories
router.post('/', (req, res) => {
    let body = req.body; 
    let category = new Category(body); 
    category.save().then((category) => {
        res.send({
            category, 
            notice: 'Successfully created a category'
        }); 
    }).catch((err) => {
        res.send(err); 
    }); 
}); 


// GET localhost:3000/categories/:id 
router.get('/:id', validateID, (req, res) => {
    let id = req.params.id; 
    Category.findById(id).then((category) => {
       if(!category) {
           res.send({
               notice: 'record not found'
           })
       }
       res.send(category); 
    }).catch((err) => {
        res.send(err);
    })
}); 


router.put('/:id', validateID, (req, res) => {
    const id = req.params.id 
    const body = req.body 
    
    Category.findByIdAndUpdate(id, { $set: body }, { new: true }).then((category) => {
        res.send(category)
    })
    // Category.findOneAndUpdate({ _id: id}, {}, {})
})

// DELETE localhost:3000/categories/:id
router.delete('/:id', validateID, (req, res) => {
    let id = req.params.id; 
    Category.findByIdAndDelete(id).then((category) => {
        if(!category) {
            res.send({
                notice: 'record not found'
            });
        }

        res.send({
            category, 
            notice: 'successfully deleted the record'
        }); 

    }).catch((err) => {
        res.send(err); 
    })
})

// categories/id/products
router.get('/:id/products', validateID, (req,res) => {
    let categoryId = req.params.id; 

    Category.findAllProducts(categoryId).then((products) => {
        res.send(products);
    }).catch((err) => {
        res.send(err); 
    })

    // Product.find({ category: categoryId}).then((products) => {
    //     res.send(products);
    // }).catch((err) => {
    //     res.send(err); 
    // })
}); 


module.exports = {
    categoriesController: router
}
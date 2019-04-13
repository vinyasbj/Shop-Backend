const express = require('express'); 
const router = express.Router(); 
const multer = require("multer");
var cloudinary = require('cloudinary').v2;
const CLOUDINARY_URL= "https://api.cloudinary.com/v1_1/hldhyru73/upload";
const CLOUDINARY_UPLOAD_PRESET = 'jcc9czjw';
// const { validateID } = require('../middlewares/utilities'); 


const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,'./uploads/');
    },
    filename: function(req,file,callback){
        callback(null,new Date().toISOString()+file.originalname);
    }
});
const upload = multer({storage: storage});
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

router.post('/',upload.single('productImage'), (req, res) => {
    console.log(req.file);
    cloudinary.config({ 
        cloud_name: 'hldhyru73', 
        api_key: '116327454992586', 
        api_secret: 'UqoUKgVo058jHaju3cntj_ZeTFg' 
    });
    const path = req.file.path
    cloudinary.uploader.upload(path,{ resource_type: "image",public_id: `uploads/${req.body.name}`  },
    function(err, image) {
        let body = req.body;
        if (err) return res.send(err)
        // return image
        body.productImage =  image.secure_url
        let product = new Product(body); 
        console.log(image.secure_url);
        product.save().then((product) => {
            res.send({
                product, 
                notice: 'Successfully created a product'
            }); 
        }).catch((err) => {
            res.send(err); 
        })
        console.log('file uploaded to Cloudinary')
        // const fs = require('fs')
        // fs.unlinkSync(path)
        // res.json(image)
    })
})

router.put('/:id', validateID, upload.single('productImage'),(req, res) => {
    const id = req.params.id 
    const body = req.body 
    cloudinary.config({ 
        cloud_name: 'hldhyru73', 
        api_key: '116327454992586', 
        api_secret: 'UqoUKgVo058jHaju3cntj_ZeTFg' 
    });
    const path = req.file.path
    cloudinary.uploader.upload(path,{ resource_type: "image",public_id: `uploads/${req.body.name}`  },
    function(err, image) {
        let body = req.body;
        if (err) return res.send(err)
        // return image
        body.productImage =  image.secure_url
        console.log(image.secure_url);
        Product.findByIdAndUpdate(id, { $set: body }, { new: true }).then((product) => {
            res.send(product)
        }).catch((err) => {
            res.send(err); 
        })
        console.log('file uploaded to Cloudinary')
        // const fs = require('fs')
        // fs.unlinkSync(path)
        // res.json(image)
    })
    // Product.findByIdAndUpdate(id, { $set: body }, { new: true }).then((product) => {
    //     res.send(product)
    // })
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

/* router.post('/',upload.single('productImage'), (req, res) => {
    console.log('====================================')
    // console.log(req.body);
    // console.log(req.file);
    console.log('====================================')
    let body = req.body; 
    let product = new Product(body); 
    console.log(body);
    product({productImage: req.file.path})
    product.save().then((product) => {
        res.send({
            product, 
            notice: 'Successfully created a product'
        }); 
    }).catch((err) => {
        res.send(err); 
    })
}) */

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
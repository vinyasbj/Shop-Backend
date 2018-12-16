// Object Prototype Function

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const { Product } = require('./product'); 

const categorySchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 1,
        maxlength: 64,
        unique: true
    }
}); 

// static methods or instance methods should not be arrow functions

// defining our own static methods, adding our own behaviour in our project
categorySchema.statics.findAllProducts = function(id){
    let categoryId = id; 
    return Product.find({ category: categoryId})
}

const Category = mongoose.model('Category', categorySchema); 

module.exports = {
    Category
}


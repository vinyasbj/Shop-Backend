// Object Prototype Function

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const categorySchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 1,
        maxlength: 64
    }
}); 

const Category = mongoose.model('Category', categorySchema); 

module.exports = {
    Category
}


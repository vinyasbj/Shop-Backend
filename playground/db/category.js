const { mongoose } = require('../../config/db'); 
const { Category } = require('../../app/models/category'); 

let c1 = new Category({ name: 'Sports'});
c1.save(); 
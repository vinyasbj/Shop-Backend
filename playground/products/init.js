
const { Product } = require('./product'); 
const User = require('./user'); 

let p1 = new Product({ name: 'marker', price: 15}); 
console.log(p1.details()); 

let u1 = new User({ username: 'ramesh', email: 'ramesh@gmail.com'}); 
console.log(u1.details()); 
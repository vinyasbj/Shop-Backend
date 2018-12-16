// console.log(require('./data')); // returns object 
// console.log(quote);  // reference Error as the variable not there
// const fileData = require('./data'); // object assigned to variable
// console.log(fileData.quote); // invoking one of the property

// make it available as independent variable; 
// const quote = require('./data').quote; 
// const add = require('./data').add; 

// console.log(quote); 
// console.log(add(10,20));

// do it the es6 way of obj destructuring 

const { quote, name, city, add} = require('./data'); 
const { users } = require('./users/info'); 
console.log(quote, name); 
console.log(users); 
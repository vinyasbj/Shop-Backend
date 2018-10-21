// concise object properties 
let firstName = 'sachin';
let lastName = 'tendulkar'; 

// es5 
var player = {
    firstName: firstName,
    lastName: lastName
}

// es6 
const person = {
    firstName,
    lastName
}
console.log(person); 


// concise object methods
// es5
var car = {
    name: 'civic', 
    model: 1998,
    details: function(){
        return this.name + ' ' + this.model;
    }
}
console.log(car.details()) 

// es6
const product = {
    name: 'marker', 
    price: 15, 
    details() {
        return `${this.name} ${this.price}`; 
    }
}
console.log(product.details()); 
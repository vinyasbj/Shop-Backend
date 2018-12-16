// object destructuring 
var player = {
    firstName: 'sachin',
    lastName: 'tendulkar'
}

// es5 
var fName = player.firstName; 
var lName = player.lastName; 

console.log(fName, lName); 

// es6
const product = {
    name: 'marker',
    price: 15,
    details() {
        return `${this.name} ${this.price}`;
    }
}

const {name, price} = product; 
console.log(name, price); 
console.log(product); 
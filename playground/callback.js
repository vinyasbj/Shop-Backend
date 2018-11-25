// let users = User.find(); User.all 
// puts users 


// let users = User.find().then((users) => { console.log(users)}); 
// console.log(users); 

// function expression
// functions are treated like first class citizen
const display = (value) => {
    console.log(value); 
}


const add = (n1,n2,display) => {
    const result = n1 + n2; 
    display(result); 
}

add(10,20, display)



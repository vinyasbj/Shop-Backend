// function declaration
function add(n1,n2){
    return n1 + n2; 
}
add(10,20); 

// function expression 
var addition = function(n1, n2){
    return n1 + n2; 
}
addition(10,20); 

var numbers = [10,20,30];
numbers.forEach(function(n){
    console.log(n + 5); 
});

numbers.filter(function(n){
    return n > 25;
});

//btnHandle.addEventListener('click', function(){}, false); 


// FUNCTION EXPRESSION 
// Variation 1
// keyword function is removed and => is added 
const sum = (n1,n2) => {
    return n1 + n2; 
}
console.log(sum(10,2)); 

// Variation 2
// if there is only 1 statement to be executed inside the function we can write it on the same line, without the {} and the need of using the return keyword
const sum = (n1, n2) => n1 + n2;
console.log(sum(10, 2));

// FOR EACH 
// VARIATION 1
numbers.forEach((n) => {
    console.log(n); 
}); 

// VARIATION 2 
numbers.forEach((n) =>console.log(n) ); 

// VARIATION 3
// if the function has only 1 argument being passed, we can also remove the () brackets. 
numbers.forEach(n => console.log(n) ); 

// FIlTER 
// es5 
numbers.filter(function (n) {
    return n > 25;
});

// es6
numbers.filter(n => n > 25);



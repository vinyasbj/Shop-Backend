console.log('task 1'); 
setTimeout(() => { // simulation db operation 
    console.log('task 2'); 
}, 2000);
setTimeout(() => {
    console.log('task 3')
}, 1000);
console.log('task 4'); 
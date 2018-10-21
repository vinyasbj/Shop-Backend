// npm init -y 
// npm install --save express
const express = require('express'); 
const app = express(); 
const port = 3000; 

const { routes } = require('./config/routes'); 
// // localhost:3000/books

app.use('/', routes); 

app.listen(port, function() {
    console.log('listening on port', port); 
}); 
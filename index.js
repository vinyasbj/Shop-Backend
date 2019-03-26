// npm init -y 
// npm install --save express
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 5000;
const { mongoose } = require('./config/db'); 
const { routes } = require('./config/routes'); 
// // localhost:3000/books

app.use(express.json()); 

app.use('/', routes); 

app.listen(port, function() {
    console.log('listening on port', port); 
}); 
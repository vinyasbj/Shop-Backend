// npm init -y 
// npm install --save express
const express = require('express'); 
var cors = require('cors')
const app = express(); 
const port = process.env.PORT || 80;
const { mongoose } = require('./config/db'); 
const { routes } = require('./config/routes'); 
// // localhost:3000/books

app.use(express.json()); 
app.use(cors())
app.use('/', routes); 

app.listen(port, function() {
    console.log('listening on port', port); 
}); 

app.listen(port, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
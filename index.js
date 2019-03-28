// npm init -y 
// npm install --save express
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000;
const cors = require('cors')
const { mongoose } = require('./config/db'); 
const { routes } = require('./config/routes'); 
// // localhost:3000/books
app.use(express.json()); 
app.use(cors());

// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin",'*');
//     res.header("Access-Control-Allow-Headers",
//     'Origin,X-Requested-With,Content-Type,Accept,Authorization');
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,GET,DELETE');
//         return res.status(200).json({});
//     }
//     next();
// });

app.use('/', routes); 

app.listen(port, function() {
    console.log('listening on port', port); 
}); 

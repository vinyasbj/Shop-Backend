const express = require('express'); 
// console.log(express); 
const app = express(); 
const port = 3000;


// npm install --save body-parser
// const bodyParser = require('body-parser')
// app.use(bodyParser.json()); 

// to accept incoming json data - at the time of creation or updation of records
app.use(express.json()); 

// Route Handlers
// app.get('/', function(req, res){
//     //console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()}`);
//     res.send('<h2> Hello World</h2>'); 
// });

// es6 arrow functions 


// app.METHOD(PATH, HANDLER)

app.get('/', (req, res) => { 
    res.send('<h2> Hello Word</h2>')
}); 

app.get('/about', (req, res) => {
    res.send('<h2>about the company</h2>');
});

app.get('/contact', (req, res) => {
    res.send('<h2>Contact Details</h2>');
});

// dummy data storage
let products = [
    { id: 1, name: 'Marker', price: 15 },
    { id: 2, name: 'Scale', price: 10 },
    { id: 3, name: 'Board', price: 25 }
];


// POST localhost:3000/products 
app.post('/products', (req, res) => {
    products.push(req.body); 
    res.send({
        notice: 'successfully created a product'
    });
}); 

// GET localhost:3000/products 
app.get('/products', (req, res) => {
    res.send(products); 
});

app.delete('/products/:id', (req, res) => {
    res.send('delete request was sent')
});

app.put('/products/:id', (req, res) => {
    res.send('update request was sent')
})

app.get('/products/:id', (req, res) => {
    let id = req.params.id; 
    // TODO 
    let product = products.find(prod => prod.id == id ); 
    if(product) {
        res.send(product); 
    } else {
        res.send({
            notice: 'product you are looking for does not exist'
        }); 
    }
});

// /products/name/nike
// /products/:id/reviews/:review_id
app.get('/products/name/:name', (req, res) => {
    let name = req.params.name; 
    let filteredProducts = products.filter(prod => prod.name.toLowerCase().indexOf(name.toLowerCase()) >= 0); 
    if (filteredProducts) {
        res.send(filteredProducts); 
    } else {
        res.send({
            notice: 'product you are looking for does not exist'
        })
    }
});

let users = [
    { id: 1, email: '1@gmail.com', name: 'user1'},
    { id: 2, email: '2@gmailcom', name: 'user2'},
    { id: 3, email: '3@gmail.com', name: 'user3'}
];

// localhost:3000/users - send all users 
app.get('/users', (req, res) => {
    res.send(users); 
})

// localhost:3000/users/1 - send users by the id 1 
app.get('/users/:id', (req, res) => {
    let id = req.params.id; 
    let user = users.find(user => user.id == id);
    if(user){
        res.send(user); 
    } else {
        res.send({
            notice: 'user not found'
        })
    }
})

// localhost:3000/users/show/name/user1 - send user whose name user1
app.get('/users/show/name/:name', (req, res) => {
    let name = req.params.name; 
    let user = users.find(user => user.name == name); 
    if(user) {
        res.send(user); 
    } else {
        res.send({
            notice: 'user not found'
        })
    }
})
// localhost:3000/users/show/email/1@gmail.com - send user whose email 1@gmail.com
// localhost:3000/profile/user1 - send the user details whose name is user1
app.get('/profile/:name', (req, res) => {
    let name = req.params.name;
    let user = users.find(user => user.name == name);
    if (user) {
        res.send(user);
    } else {
        res.send({
            notice: 'user not found'
        })
    }
})






app.get('/about/contact', (req, res) => {
    res.send('about contact page');
})


app.listen(port, () => {
    console.log('listening on port', port);
}); 

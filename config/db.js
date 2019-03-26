const mongoose = require('mongoose');
mongoose.Promise = global.Promise
// const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://heroku_p8v78z7c:ocuuuc2gdt3fsiqmk2ue3oo9ua@ds223756.mlab.com:23756/heroku_p8v78z7c';
mongoose.connect('mongodb://heroku_p8v78z7c:ocuuuc2gdt3fsiqmk2ue3oo9ua@ds223756.mlab.com:23756/heroku_p8v78z7c', { useNewUrlParser: true }).then((res) => {
    console.log('connected to db'); 
}).catch((err) => {
    console.log(err); 
});

module.exports = {
    mongoose
}
// npm install --save mongodb 
const { ObjectID } = require('mongodb'); 

const validateID = (req, res, next) => {
    let id = req.params.id;
        if (!ObjectID.isValid(id)) {
        res.send({
            notice: 'Invalid Object ID'
        });
    }
    next();
}


module.exports = {
    validateID
}
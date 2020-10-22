
const Digimall = require('../models/digimall.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
// if(!req.body.productName) {
//     return res.status(400).send({
//         message: "can not be empty"
//     });
// }

// Create a Note
const digimall = new Digimall({
    productName: req.body.productName, 
    price: req.body.price,
    description:req.body.description
});

// Save Note in the database
digimall.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message 
    });
});
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Digimall.find()
    .then(digimalls => {
        res.send(digimalls);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        });
    });



};





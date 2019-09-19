const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// var conn = MongoClient.connect('mongodb://localhost:27017/') // returns a Promise
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/refixd', (err, client) => {
        if (err) return console.log(err);
        closure(client);
    });
};
const sendError = (err, res) => {
    response.status = 501; 
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};
router.get('/users', function(req, res) {
    connection((client) => {
        client.db('refixd').collection('pgdatabase')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
router.delete('/users/delete/:Buildingroom', function(req, res) {
    console.log(req.params);
    var array = [];
    array = req.params.Buildingroom.split('');
    var room = parseInt(array[1]+array[2]+array[3]);
    var building = parseInt(array[0]);
    console.log(room+" --------- "+building);
    connection((client) => {
        client.db('refixd').collection('pgdatabase')
            
            .deleteOne({"building":building,"room":room}, function (err, product) {
                // console.log(product);
                // if (err) return next(err);
                return res.send(product);
            });
    });})
router.put('/users/update/:key', function(req, res) {
    var obj = {};
    obj['name']=req.body.name;
    obj['Aadhar']=parseInt(req.body.Aadhar);
    obj['Pan']=req.body.Pan;
    connection((client) => {
        client.db('refixd').collection('pgdatabase')
            
            .update({"key":req.body.key}, {$set: obj}, function (err, product) {
                return res.send(product);
            });
    });
});
router.post('/users/insert', function(req, res) {
    // var obj = {};
    // obj['name']=req.body.name;
    // obj['Aadhar']=parseInt(req.body.Aadhar);
    // obj['Pan']=req.body.Pan;
    connection((client) => {
        console.log(req.body);
        client.db('refixd').collection('pgdatabase')
            
            .insert(req.body, function (err, product) {
                return res.send(product);
            });
    });
})
module.exports = router;
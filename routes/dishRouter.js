var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.json());

router.route('/')
.all(function(req, res, next) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    next();
})
.get(function(req, res, next) {
    res.end('Will send all the dishes for you');
})
.post(function(req, res, next) {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
    res.end('Deleting all dishes');
});

router.route('/:dishId')
.all(function(req, res, next) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    next();
})
.get(function(req, res, next) {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
})
.put(function(req, res, next) {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = router;

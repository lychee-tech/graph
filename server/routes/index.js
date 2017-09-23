var express = require('express');
var router = express.Router();
var requireText = require('require-text');


router.get('/', function(req, res, next) {
    requireText("../../dist/index.html", function(html) {
       res.send(html);
    });
});

module.exports = router;

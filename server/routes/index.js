var express = require('express');
var router = express.Router();
var requireText = require('require-text');
import path from "path";


router.get('/', function(req, res, next) {
    var templateDir=path.join(__dirname,"../../public/index.html" );
    var html = requireText(templateDir,require);
    res.end(html);

});

module.exports = router;

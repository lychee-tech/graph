var express = require('express');
var router = express.Router();
var graphqlHTTP = require('express-graphql');
var mongoose = require('mongoose');
import schema from "../data/schema/schema";





router.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

module.exports = router;
const fs = require('fs');
const path = require('path');
const { introspectionQuery } = require('graphql/utilities');
const { graphql } = require('graphql');

var mySchema = require("../server/data/schema/schema");


graphql(mySchema, introspectionQuery)
    .then(result => {
        fs.writeFileSync(
            path.join(__dirname, 'cache/schema.json'),
            JSON.stringify(result, null, 2)
        );
        console.log('Generated cached schema.json file');
    })
    .catch(console.error);
import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType} from "graphql"
const {
    globalIdField,
    fromGlobalId,
    nodeDefinitions,
    connectionDefinitions,
    connectionArgs,
    connectionFromArray,
    connectionFromPromisedArray
} = require('graphql-relay');


const ProductType = new GraphQLObjectType ({
    name:"Product",
    fields:{
        id:globalIdField("Product"),
        name:{
            type: GraphQLString
        }
    }
});

export default ProductType;
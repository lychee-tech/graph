import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType} from "graphql";


const {
    globalIdField,
    fromGlobalId,
    nodeDefinitions,
    connectionDefinitions,
    connectionArgs,
    connectionFromArray,
    connectionFromPromisedArray
} = require('graphql-relay');

import {nodeField, nodeInterface} from "../node/node";


class User {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const UserType = new GraphQLObjectType( {
    name:"User",
    fields:{
        id:globalIdField("User",(obj)=>obj.id),
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        likesCount:{
            type: GraphQLInt,
            resolve:()=>10
        }
    },
    interfaces:[nodeInterface],
    isTypeOf: (obj) => obj instanceof User
});

const UserInputType = new GraphQLInputObjectType({
    name:"UserInput",
    fields :{
        firstName: {type:GraphQLString},
        lastName:{type:GraphQLString}
    }
});

export {User,UserType, UserInputType};
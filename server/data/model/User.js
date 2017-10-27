import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType} from "graphql"

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
        id:{type:GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        likesCount:{
            type: GraphQLInt,
            resolve:()=>10
        }
    }
});

const UserInputType = new GraphQLInputObjectType({
    name:"UserInput",
    fields :{
        firstName: {type:GraphQLString},
        lastName:{type:GraphQLString}
    }
});

export {User,UserType, UserInputType};
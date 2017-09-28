import {GraphQLObjectType, GraphQLString} from "graphql"

class User {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const UserType = new GraphQLObjectType( {
    name:"user",
    fields:{
        id:{type:GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
    }
});

export {User,UserType};
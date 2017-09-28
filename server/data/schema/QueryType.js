import {GraphQLObjectType, GraphQLList, GraphQLInt}  from "graphql";
import {UserType} from "../model/User";
import {getUserById} from "../../service/userService";

const QueryType = new GraphQLObjectType ({
   name :"query",
   fields: {
       greet: { type:  UserType,
         resolve: (_, args)=> getUserById()
       }
   }
});


export default QueryType;
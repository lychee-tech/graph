import {GraphQLObjectType, GraphQLList, GraphQLInt}  from "graphql";
import {UserType} from "../model/User";
import {getUserById, countUsers, listUsers} from "../../service/userService";

const QueryType = new GraphQLObjectType ({
   name :"query",
   fields: {
       getUserById: { type:  UserType,
         resolve: (_, args)=> getUserById()
       },
       countUsers:{
           type:GraphQLInt ,
           resolve: ()=> countUsers()
       },
       listUsers: {
           type: new GraphQLList(UserType),
           resolve:() => listUsers()
       }
   }
});


export default QueryType;
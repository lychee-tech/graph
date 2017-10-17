import {GraphQLObjectType, GraphQLList, GraphQLInt}  from "graphql";
import {UserType} from "../model/User";
import {getUserById, countUsers, listUsers} from "../../service/userService";

const QueryType = new GraphQLObjectType ({
   name :"query",
   fields: {
       user: { type:  UserType,
         resolve: (_, args)=> getUserById()
       },
       count:{
           type:GraphQLInt ,
           resolve: ()=> countUsers()
       },
       users: {
           type: new GraphQLList(UserType),
           resolve:() => listUsers()
       }
   }
});


export default QueryType;
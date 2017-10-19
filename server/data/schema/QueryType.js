import {GraphQLObjectType, GraphQLList, GraphQLInt}  from "graphql";
import {UserType} from "../model/User";
import {UserListType} from "../model/UserList";
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
           type: UserListType,
           resolve:() => listUsers()
       }
   }
});


export default QueryType;
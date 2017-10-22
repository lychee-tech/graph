import {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString}  from "graphql";
import {UserType} from "../model/User";
import {UserListType} from "../model/UserList";
import {getUserById, countUsers, listUsers} from "../../service/userService";
import {UserPageType} from "../model/UserPage";

const {
    connectionDefinitions,
    connectionArgs,
    connectionFromArray,
    connectionFromPromisedArray
} = require('graphql-relay');


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
       },
       userPage: {
           type: UserPageType,
           resolve:(_,args) => connectionFromPromisedArray(listUsers(), args)
       }
   }
});


export default QueryType;
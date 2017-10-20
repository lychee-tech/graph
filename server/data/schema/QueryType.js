import {GraphQLObjectType, GraphQLList, GraphQLInt}  from "graphql";
import {UserType} from "../model/User";
import {UserListType} from "../model/UserList";
import {UserConnectionType} from "../model/UserConnection";
import {getUserById, countUsers, listUsers} from "../../service/userService";

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
       userConnection: {
           type: UserConnectionType,
           args: connectionArgs,
           resolve:(_,args) => connectionFromPromisedArray(listUsers(), args)
       }
   }
});


export default QueryType;
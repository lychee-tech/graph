import {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString}  from "graphql";
import {UserType} from "../model/user/User";
import {UserListType} from "../model/user/UserList";
import {getUserById, countUsers, listUsers} from "../../service/userService";
import {UserPageType} from "../model/user/UserPage";
import EmployeeType from "../model/school/Employee";
import ProductType from "../model/product/Product"

const {
    globalIdField,
    fromGlobalId,
    nodeDefinitions,
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
       },

       employees: {
           type: new GraphQLList(EmployeeType),
           resolve:() => {
               return  [
                   {name:"wenhao", fId:1},
                   {name:"wenhao", sId:2}
                   ];
           }
       },
       product: {
           type: ProductType,
           resolve: () => ({name :"pinapple"})
       }
   }
});


export default QueryType;
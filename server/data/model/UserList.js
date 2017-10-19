import {GraphQLObjectType, GraphQLList} from "graphql"
import {UserType} from "./User";


const UserListType = new GraphQLObjectType( {
    name:"UserList",
    fields:{
        allUsers: {
            type: new GraphQLList(UserType),
            resolve:(obj)=> {
                console.log("resolve is called", obj);
                return obj;
            }
        }
    }
});

export {UserListType};
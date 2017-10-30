import {GraphQLObjectType, GraphQLString, GraphQLInputObjectType} from "graphql"
import {UserConnectionType} from "./UserConnection";


const {
    connectionDefinitions,
    connectionArgs,
    connectionFromArray,
    connectionFromPromisedArray
} = require('graphql-relay');


var connectionArgsWithSearch = connectionArgs;
connectionArgsWithSearch.search ={type: GraphQLString};


const UserPageType = new GraphQLObjectType({
    name:"UserPage",
    fields :{
      connection: {
          type: UserConnectionType,
          args: connectionArgsWithSearch,
          resolve:(obj,args) => {
              console.log("args", args);
              return obj;
          }
      },

    }
});


export {UserPageType};
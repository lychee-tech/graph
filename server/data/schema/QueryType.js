import {GraphQLObjectType, GraphQLString}  from "graphql";

import {Teacher, TeacherType} from "../model/Teacher";


const QueryType = new GraphQLObjectType ({
   name :"query",
   fields: {
       greet: {type: TeacherType,
         resolve:()=> new Teacher(0, "wenhao")
       }
   }
});


export default QueryType;
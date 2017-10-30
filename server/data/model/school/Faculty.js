import {GraphQLObjectType, GraphQLString, GraphQLInt} from "graphql";
import EmployeeType from "./Employee";


const FacultyType = new GraphQLObjectType({
    name:"Faculty",
    fields:{
        name:{type:GraphQLString},
        fId:{type: GraphQLInt}
    },
    interfaces: ()=> [EmployeeType]

});


export default FacultyType;
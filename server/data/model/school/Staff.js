import {GraphQLObjectType, GraphQLString, GraphQLInt} from "graphql";
import EmployeeType from "./Employee";

const StaffType = new GraphQLObjectType({
    name:"Staff",
    fields:{
        name:{type:GraphQLString},
        sId:{type: GraphQLInt}
    },

    interfaces: ()=>[EmployeeType],



});


export default StaffType;
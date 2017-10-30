import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInterfaceType} from "graphql"
import FacultyType from "./Faculty";
import StaffType from "./Staff";


const EmployeeType = new GraphQLInterfaceType({
    name:"Employee",
    fields: {
        name: {type: GraphQLString },
    },
    resolveType: (e) => {
        if (!!e["fId"]) {
            return FacultyType;
        } else if (!!e["sId"]) {
            return StaffType;
        } else {
            throw new Error("the passed object did not implement Employee interface");
        }
    }


});


export default EmployeeType;



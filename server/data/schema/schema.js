import {GraphQLSchema}  from "graphql";
import QueryType from "./QueryType";
import {MutationType} from "./MutationType";
import FacultyType from "../model/school/Faculty";
import StaffType from "../model/school/Staff";


var schema = new GraphQLSchema({
    query: QueryType,
    types:[FacultyType, StaffType ]

});




export default schema
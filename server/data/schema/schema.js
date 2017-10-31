import {GraphQLSchema}  from "graphql";
import QueryType from "./QueryType";
import {MutationType} from "./MutationType";
import FacultyType from "../model/school/Faculty";
import StaffType from "../model/school/Staff";
import {UserType} from "../model/user/User";

var schema = new GraphQLSchema({
    query: QueryType,
    types:[FacultyType, StaffType, UserType ]

});




export default schema
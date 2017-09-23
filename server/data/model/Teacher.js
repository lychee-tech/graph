import {GraphQLObjectType, GraphQLInt, GraphQLString} from "graphql";


class Teacher {
    constructor(tid, name) {
        this.tid= tid;
        this.name = name;
    }
}


const TeacherType = new GraphQLObjectType ({
    name:"Teacher",
    fields: {
        tid: {type: GraphQLInt},
        name: {type :GraphQLString}
    }
});

export  {Teacher, TeacherType};
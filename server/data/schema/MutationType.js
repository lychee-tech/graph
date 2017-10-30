import {GraphQLObjectType, GraphQLString} from "graphql"
import {UserType, User, UserInputType} from "../model/user/User";

const MutationType = new GraphQLObjectType({
    name:"mutation",
    fields: {
        addUser: {
            type: UserType,
            args:{
                user: {type:UserInputType}
            },
            resolve: (_, args) => {
                console.log(args.user);
                return new User("1","michell", "lin")
            }
        }
    }

});

export {MutationType};
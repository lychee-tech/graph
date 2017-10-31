import {User} from "../user/User";

const {
    globalIdField,
    fromGlobalId,
    nodeDefinitions,
    connectionDefinitions,
    connectionArgs,
    connectionFromArray,
    connectionFromPromisedArray
} = require('graphql-relay');


function globalIdFetcher(globalId){
    const { type, id } = fromGlobalId(globalId);
    console.log("globalIdFetcher is called", globalId, type);

    switch (type) {
        case "User":
            return new User(id, "auto", "auto");
        default:
            return null;
    }
}


function globalTypeResolver() {

}

const { nodeInterface, nodeField } = nodeDefinitions(
    globalIdFetcher
);


export  {nodeInterface, nodeField};
const {
    connectionDefinitions,
    connectionArgs,
    connectionFromArray,
    connectionFromPromisedArray
} = require('graphql-relay');
import {UserType} from "./User";


const { connectionType: UserConnectionType } =
    connectionDefinitions({
        name: 'User',
        nodeType: UserType
    });

export {UserConnectionType}
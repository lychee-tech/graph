import {User} from "../data/model/User";
import {UserEntity} from "../data/entity/UserEntity";


async function getUserById(userId) {
    var entity = await  UserEntity.findById("59989752e5ff0a03c22c9a81");
    return !entity? null: new User(entity["_id"].toString(), entity.firstName, entity.lastName);
}


export {getUserById}
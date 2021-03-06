import {User} from "../data/model/user/User";
import {UserEntity} from "../data/entity/UserEntity";


async function getUserById(userId) {
    var entity = await  UserEntity.findById("59989752e5ff0a03c22c9a81");
    return !entity? null: new User(entity["_id"].toString(), entity.firstName, entity.lastName);
}

async function countUsers(){
    return UserEntity.count();
}

async  function listUsers(){
    var entities = await UserEntity.find() || [];
    return entities.map(e => new User(e["_id"].toString(), e.firstName, e.lastName));
}

export {getUserById, countUsers, listUsers}
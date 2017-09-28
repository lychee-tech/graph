var mongoose = require('mongoose')
    ,Schema = mongoose.Schema;

//
var userSchema = new Schema({
    firstName: String,
    lastName:  String,
});

var UserEntity = mongoose.model("UserEntity",  userSchema, "users");
export {UserEntity};
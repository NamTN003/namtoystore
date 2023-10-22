const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    username : {
        type : 'string',
        required : true,
        unique : true
    },
    password : {
        type : 'string',
        required : true
    },
    image : String
})
const UserModel = mongoose.model('user', UserSchema, 'user');
module.exports = UserModel;
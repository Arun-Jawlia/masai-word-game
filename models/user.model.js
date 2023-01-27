const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{type: 'string', required: true, unique: true},
    difficulty:{type: 'string', required: true},
    Score:{type: 'string'}
})

const UserModel = mongoose.model('user', UserSchema)


module.exports={
    UserModel
}
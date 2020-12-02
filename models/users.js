const mongoose = require('mongoose')
const Schema = mongoose.Schema

//创建注册用户Schema
const usersSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    },
    create_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: "avatar"
    }
})
//创建model集合
const Users = mongoose.model('Users', usersSchema)

module.exports = Users
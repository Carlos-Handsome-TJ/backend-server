const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    author: String,
    avatar: String,
    create_time: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    images: String,
    video: String,
    comment: String,
    like: Number,
    retweet: Number

})

//创建model集合
const Articles = mongoose.model('Articles', articleSchema)

module.exports = Articles
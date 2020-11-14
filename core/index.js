/**
 * 连接数据库的相关设置：（数据库的名称，密码，端口号）
 */

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, data) => {
    if (err) throw err
    console.log("数据库连接成功！")
})

module.exports = mongoose

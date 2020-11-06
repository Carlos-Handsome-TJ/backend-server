const MongoClient = require('mongodb')

//连接的url地址：
const url = 'mongodb://localhost:27017'
//数据库名称：
const dbName = 'project'

//数据库连接方法封状：
function connect(callback) {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            console.log(err, '数据库连接失败！')
        } else {
            console.log('数据库连接成功！')
            const db = client.db(dbName)
            callback && callback(db)
            //关闭数据库：
            client.close()
        }
    })
}

module.exports = { connect }

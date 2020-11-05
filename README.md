```
1.使用express脚手架搭建项目初始结构
2.安装 mongodb数据库
2.1启动本地数据库：
    mongod dbpath "D:\mongodb\data\db"
2.2连接数据库：
    mongo.exe
2.3显示数据库：
    show dbs
    admin 0.0000GB
    config 0.0000GB
    local 0.0000GB
    使用数据库： use ...(数据库名称)
    创建数据库： use ...(数据库名称);创建数据库集合：db.createCollection("users");db.users.insertOne({name: "zhangsan"})
    删除本地数据库：db.dropDatabase()
3.连接本地数据库
4.路由开发
```

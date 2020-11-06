const express = require('express');
const router = express.Router();
const model = require('../model/index.js');

/* GET home page. */
router.get('/', (req, res, next) => {
    model.connect(db => {
        db.collection('users').find().toArray((err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.send(data)
            }
        })
    })
})
//注册接口：
router.post('/register', (req, res, next) => {
    const { username, password, email, confirm } = req.body.data
    const postData = {
        username,
        password,
        email
    }
    if (password !== confirm) {
        res.send({ status: 1, msg: "两次密码输入不一致！" })
    }
    //查询用户是否注册：
    model.connect(db => {
        db.collection('users').findOne({ username }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                if (data) {
                    res.send({ status: 2, msg: "用户已注册！" })
                } else{
                    //用户未注册：
                    model.connect(db => {
                        db.collection('users').insertOne(postData, (err, data) => {
                            if (err) {
                                console.log(err)
                            } else{
                                res.redirect('/login')
                            }
                        })
                    })
                }
            }
        })
    })
    //
})
//登录接口：
router.post('/login', (req, res, next) => {
    const { username, password } = req.body.data
    const postData = {
        username,
        password
    }
    model.connect(db => {
        db.collection('users').findOne(postData, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                if (!data) {
                    res.send({ status: 1, msg: "账号密码错误！" })
                } else {
                    res.send({ status: 0, msg: "登录成功" })
                    // res.redirect('/userList')
                }
            }
        })
    })
})

module.exports = router;

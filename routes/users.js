/**
 * user路由:实现用户的创建、登录功能
 * 
 */
const express = require('express')
const router = express.Router()
const model = require('../core/index.js');
const Users = require('../models/users.js');


//注册接口：
router.post('/register', (req, res, next) => {
    const { username, password, email, confirm, agreement } = req.body.data
    if (password !== confirm) {
        res.send({ status: 1, msg: "两次密码输入不一致！" })
        return
    }
    if (!agreement) {
        res.send({ status: 1, msg: "请同意协议！" })
        return
    }
    //查询用户是否注册：
    Users.findOne({ username }, (err, docs) => {
        if (err) throw err
        if (docs) {
            res.send({ status: 2, msg: "用户已注册！" })
        } else {
            const user = new Users({ username, password, email })
            user.save().then(data => {
                console.log(data)
            }).catch(e => console.log(e))
            res.send({ status: 0, msg: "注册成功！" })
        }
    })
})
//登录接口：
router.post('/login', (req, res, next) => {
    const { username, password } = req.body.data
    const postData = {
        username,
        password
    }
    Users.findOne(postData, (err, docs) => {
        if (err) throw err
        if (!docs) {
            res.send({ code: -1, msg: "账号密码错误！" })
        } else {
             //登录成功进行cookie状态保存：
            req.session.user_id = username
            console.log(req.session)
            res.status(200).send({ msg: "登录成功" })
        }
    })
})
//退出登录：
router.get('/logout', (req, res, next) => {
    req.session.user_id = null
    console.log(req.session.user_id, '退出登录')
    res.redirect('/login')
    return
})
//用户名校验：
router.get('/checkName', (req, res, next) => {
    const { username } = req.query
    if (!username) {
        res.send({ code: 2, msg: "请输入用户名！" })
        return
    }
    Users.findOne({ username }, (err, docs) => {
        if (err) throw err
        if (docs) res.send({ code: 1, msg: "用户名已注册" })
        else res.send({ code: 0, msg: "用户名可以使用" })
    })
})

module.exports = router;
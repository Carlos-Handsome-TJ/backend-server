/**
 * user路由:实现用户的创建、登录功能
 * 
 */
const express = require("express")
const requestIp = require("request-ip")
const router = express.Router()
const Users = require("../models/users.js")


//注册接口：
router.post('/register', (req, res, next) => {
    const { username, password, email, confirm, agreement } = req.body
    if (password !== confirm) {
        res.send({ code: 1, msg: "两次密码输入不一致！" })
        return
    }
    if (!agreement) {
        res.send({ code: 1, msg: "请同意协议！" })
        return
    }
    console.log(req.body)
    //查询用户是否注册：
    Users.findOne({ username }, (err, docs) => {
        if (err) throw err
        if (docs) {
            res.send({ code: 2, msg: "用户已注册！" })
        } else {
            const user = new Users({ username, password, email })
            user.save().then(data => {
                console.log(data)
            }).catch(e => console.log(e))
            res.send({ code: 0, msg: "注册成功！" })
        }
    })
})
//登录接口：
router.post('/login', (req, res, next) => {
    const { username, password } = req.body
    const postData = {
        username,
        password
    }
    Users.findOne(postData, (err, docs) => {
        if (err) throw err
        if (!docs) {
            res.send({ code: -1, msg: "账号或密码错误！" })
        } else {
            //登录成功进行cookie状态保存：
            const clientIP = requestIp.getClientIp(req)
            req.session.user_id = username
            // res.cookie('username', {
            //     domain: 'localhost:3000', //设置主域名
            //     path: '/', //cookie保存在根路径下
            //     secure: false, //在HTTP协议也生效
            //     signed: true,
            //     httpOnly: true, //只允许服务端修改cookie
            //     maxAge: 1000 * 60 * 24 * 1 //过期时间
            // })
            res.send({
                code: 0,
                msg: "登录成功",
                info: docs,
                ip: clientIP
            })
        }
    })
})
//退出登录：
router.get('/logout', (req, res, next) => {
    req.session.user_id = null
    res.clearCookie('username')
    console.log(req.session.user_id, '退出登录')
    res.redirect('/login')
    return
})
//用户名校验：
router.get('/checkName', (req, res, next) => {
    const { username } = req.query
    console.log(req.query)
    if (!username) {
        res.send({ code: 2, msg: "请输入用户名！" })
        return
    }
    Users.findOne({ username: username }, (err, docs) => {
        if (err) throw err
        if (docs) res.send({ code: 1, msg: "用户名已注册" })
        else res.send({ code: 0, msg: "用户名可以使用" })
    })
})
//获取验证码进行注册验证：
router.get('/getCode', (req, res, next) => {
    const num1 = Math.floor(Math.random() * 10)
    const num2 = Math.floor(Math.random() * 10)
    const num = num1 + num2
    res.send({ code: 0, msg: { num1, num2, num } })
})


module.exports = router;
const express = require('express')
const Articles = require('../models/articles')
const Users = require("../models/users.js")
const router = express.Router()

router.get("/person", (req, res, next) => {
    console.log(req.session.user_id)
    Users.find({ username: req.session.user_id }, (err, docs) => {
        if (err) throw err
        res.send({
            msg: docs,
        })
    })

})
router.get("/articles", (req, res, next) => {
    // console.log(req.headers)
    // console.log(req.socket.remoteAddress)
    console.log("add", req.header("X-Forwarded-For"))
    console.log("ip", req.ip)
    console.log(req.headers)
    console.log("all", req.socket.remoteAddress)
    // Articles.find({}, (err, docs) => {
    //     if (err) throw err
    //     res.send({ data: docs })
    // })
    res.send([{
        author: "晨风扶绿的芭蕉",
        avatar: "https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/8363340df5807340a30ec7d98f26c22e~300x300.image",
        createTime: Date.now(),
        content: "在前文中我们讲过：共识算法通常基于状态复制机 （Replicated State Machine）模型，所有节点从 同一个 state 出发，经过一系列同样操作 log 的步骤， 最终也必将达到一致的 state。也就是说，只要我们保 证集群中所有节点的 log 一致那么经过一系列追加操 作（apply）后最终得到的状态机也就是一致的。 在前文中我们讲过：共识算法通常基于状态复制机 （Replicated State Machine）模型，所有节点从 同一个 state 出发，经过一系列同样操作 log 的步骤， 最终也必将达到一致的 state。也就是说，只要我们保 证集群中所有节点的 log 一致那么经过一系列追加操 作（apply）后最终得到的状态机也就是一致的。",
        images: [{
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }, {
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }, {
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }, {
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }, {
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }, {
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }, {
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }],
        comment: [{
            username: "Alvin",
            createTime: Date.now(),
            content: "这个是真的棒棒哒！"
        }, {
            username: "Carlos",
            createTime: Date.now(),
            content: "你是真优秀！"
        }],
        retweet: 100,
        like: 187,
        follower: 100,
        attention: 150
    }, {
        author: "Alvin",
        avatar: "https://avatar-static.segmentfault.com/100/035/1000355095-5b3c339ebdbe1_huge256",
        createTime: Date.now(),
        content: "如果这样的嵌套树形结构有5层或10层，那么将是灾难式的开发维护体验。如果能不经过中间的节点直接到达需要的地方就可以避免这种问题，这时 Context api 就是来解决这个问题的。Context api 是在组件树中传递数据但不用每层都经过的一种 api。下面我们一起看看 Context Hook 的使用方法。",
        images: [{
            src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71745867_2571534912890433_5280417653389787136_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=mVd-vAwfMz4AX9NH6Li&_nc_ht=scontent-lax3-1.xx&oh=5926d44cad30d187661f70b9d5bd1491&oe=5FE7CB12",
            alt: "PLMM"
        }, {
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }, {
            src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71300801_2571534882890436_9049671224258461696_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=AXaLA8jggpkAX-ROugZ&_nc_ht=scontent-lax3-1.xx&oh=1e1379195e33518123ff9d76f1892e14&oe=5FE95E81",
            alt: "PLMM"
        }, {
            src: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/71671448_2571534866223771_1761857638506692608_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=-NirSBvpkBcAX-IYD5J&_nc_ht=scontent-lax3-2.xx&oh=4a2949b4d37d75cfe99b84ac5454eed9&oe=5FE868F0",
            alt: "PLMM"
        }],
        comment: [{
            username: "Alvin",
            createTime: Date.now(),
            content: "这个是真的棒棒哒！"
        }, {
            username: "Carlos",
            createTime: Date.now(),
            content: "你是真优秀！"
        }],
        retweet: 100,
        like: 187,
        follower: 100,
        attention: 150
    }, {
        author: "Alvin",
        avatar: "https://avatar-static.segmentfault.com/100/035/1000355095-5b3c339ebdbe1_huge256",
        createTime: Date.now(),
        content: "如果这样的嵌套树形结构有5层或10层，那么将是灾难式的开发维护体验。如果能不经过中间的节点直接到达需要的地方就可以避免这种问题，这时 Context api 就是来解决这个问题的。Context api 是在组件树中传递数据但不用每层都经过的一种 api。下面我们一起看看 Context Hook 的使用方法。",
        images: [{
            src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71745867_2571534912890433_5280417653389787136_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=mVd-vAwfMz4AX9NH6Li&_nc_ht=scontent-lax3-1.xx&oh=5926d44cad30d187661f70b9d5bd1491&oe=5FE7CB12",
            alt: "PLMM"
        }, {
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            alt: "PLMM"
        }, {
            src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71300801_2571534882890436_9049671224258461696_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=AXaLA8jggpkAX-ROugZ&_nc_ht=scontent-lax3-1.xx&oh=1e1379195e33518123ff9d76f1892e14&oe=5FE95E81",
            alt: "PLMM"
        }, {
            src: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/71671448_2571534866223771_1761857638506692608_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=-NirSBvpkBcAX-IYD5J&_nc_ht=scontent-lax3-2.xx&oh=4a2949b4d37d75cfe99b84ac5454eed9&oe=5FE868F0",
            alt: "PLMM"
        }],
        comment: [{
            username: "Alvin",
            createTime: Date.now(),
            content: "这个是真的棒棒哒！"
        }, {
            username: "Carlos",
            createTime: Date.now(),
            content: "你是真优秀！"
        }],
        retweet: 100,
        like: 187,
        follower: 100,
        attention: 150
    }])
})
router.post("/editor", (req, res, next) => {
    const content = req.body
    const articles = new Articles({ content })
    articles.save().then(data => { })
        .catch(e => console.log(e))
    res.status(200).end({ msg: "保存成功" })
})

module.exports = router;
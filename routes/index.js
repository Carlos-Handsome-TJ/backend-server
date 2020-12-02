const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    // res.send("测试接口")
    // //ss111
    res.send({})
})
module.exports = router;
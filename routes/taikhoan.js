let express = require('express')
let router = express.Router()

router.get('/tai-khoan', (req, res) => {
    res.render("taikhoan", {})
})

module.exports  =  router
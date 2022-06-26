let express = require('express')
let router = express.Router();
let passport = require("passport")

router.get('/dang-nhap', (req, res) => {
    res.render("dangnhap", {})
})


router.post('/dang-nhap', (req, res) => {
    passport.authenticate('local', {
        successRedirect:"/",
        failureRedirect:'/dang-nhap'    
    })(req, res)
})
module.exports = router
let express = require('express')
let router = express.Router();
let User = require('../model/User')
let mongodb = require('mongodb')
let passport = require("passport")

router.get('/dang-ky', (req, res) => {
    res.render("dangky", {})
})

router.post('/dangky', (req, res) => {
    const mUser = new User({
        tenDangNhap: "",
        tenHienThi: "",
        matKhau: req.body.password,
        gioiTinh: true,
        email: req.body.email,
        dienThoai: "",
        diaChi: ""
    })
    const password = mUser.matKhau

    User.register({
        username: mUser.email,
        password: mUser.matKhau,
    }, password, function (err, user) {
        console.log(user)
        if (err) {
            console.log(err)
            res.render("error", {message: err})
        } else {
            passport.authenticate('local')(
                req, res, function () {
                    res.render("dangnhap")
                });

        }
    })


})


module.exports = router
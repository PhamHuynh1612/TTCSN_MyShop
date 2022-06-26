let LocalStartegy = require("passport-local").Strategy
const mongoose = require("mongoose")

const User = require("../model/User")

module.exports = function (passport) {
    passport.use(
        new LocalStartegy({
            usernameField: 'username'
        }, (email, password, done) => {
            User.findOne({email: email})
                .then(user => {
                    if (!user) {
                        return done(null, false, "Tài khoản chưa đăng ký!")
                    }

                    if (password !== user.password) {
                        return done(null, false, "Sai mật khẩu!")
                    } else {
                        return done(null, user)
                    }
                })
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}
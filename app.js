var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let dangNhapRouter = require('./routes/dangnhap')
let dangKyRouter = require('./routes/dangky')
let quenMatKhauRouter = require('./routes/quenmatkhau')
let taiKhoan = require('./routes/taikhoan')

const mongoose = require('mongoose')
const bodyParser = require("express");
let passport = require("passport")
let LocalStrategy = require("passport-local")
let passportLocalMongoose =
    require("passport-local-mongoose")
let User = require("./model/User")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(dangNhapRouter)
app.use(dangKyRouter)
app.use(quenMatKhauRouter)
app.use(taiKhoan)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(require("express-session")({
    secret: "admin",
    resave: false,
    saveUninitialized: false

}))
app.use(passport.initialize())
app.use(passport.session())


mongoose.connect('mongodb+srv://huynh:huynh@mycluster.mk5tfpj.mongodb.net/?retryWrites=true&w=majority', err => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected")
    }
})


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//Handling user login
app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/dang-nhap"
}), function (req, res) {
});

module.exports = app;

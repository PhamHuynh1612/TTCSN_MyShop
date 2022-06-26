let mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');


const User = new Schema({
    tenDangNhap:String,
    tenHienThi:String,
    matKhau:String,
    gioiTinh:Boolean,
    email:String,
    dienThoai:String,
    diaChi:String
})
User.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", User)
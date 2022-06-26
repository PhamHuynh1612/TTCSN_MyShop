let mongoose = require('mongoose')
const Schema = mongoose.Schema

const DanhMuc = new Schema({
    maDanhMuc:String,
    tenDanhMuc:String
})

module.exports = mongoose.model("DanhMuc", DanhMuc)
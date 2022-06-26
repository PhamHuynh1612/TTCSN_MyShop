let mongoose = require('mongoose')
const {Double} = require("mongodb");
const Schema = mongoose.Schema

const  DonHang = new Schema({
    maDonHang:String,
    soLuong:Intl,
    donGia:Double
})

module.exports = mongoose.model("DonHang", DonHang)
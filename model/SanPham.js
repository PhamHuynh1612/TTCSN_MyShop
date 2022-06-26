let mongoose = require('mongoose')
const Schema = mongoose.Schema

const  SanPham = new Schema({
    maSanPham:String,
    tenSanPham:String,
    anhMinhHoa:String,
    donGia:Double,
    tinhTrang:Boolean,
    chiTietSanPham:String,
    danhGia:String
})

module.exports = mongoose.model("SanPham", SanPham)
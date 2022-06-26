let mongoose = require('mongoose')
const Schema = mongoose.Schema

const TinTuc = new Schema({
    maTintuc:String,
    tieuDe:String,
    noiDung:String,
    anhMinhHoa:String,
    ngayViet:Date
})

module.exports = mongoose.model("TinTuc", TinTuc)
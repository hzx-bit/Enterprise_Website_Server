const mongoose = require('mongoose')
const Schema = mongoose.Schema
//product模型==>products集合
const ProductType = {
    title:String,//标题
    introduction:String,//简要描述
    detail:String,//详细描述
    cover:String,//封面
    editTime:Date,//编辑时间
}
const ProductModel = mongoose.model('product',new Schema(ProductType))
module.exports = ProductModel
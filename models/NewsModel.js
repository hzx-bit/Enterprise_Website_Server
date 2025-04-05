const mongoose = require('mongoose')
const Schema = mongoose.Schema
//news模型==>news集合
const NewsType = {
    title:String,//标题
    content:String,//内容
    category:Number,//类别，0、1、2
    cover:String,//封面
    isPublish:Number,//是否发布
    editTime:Date,//编辑时间
}
const NewsModel = mongoose.model('news',new Schema(NewsType))
module.exports = NewsModel
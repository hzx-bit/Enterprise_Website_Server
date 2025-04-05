const ProductModel = require('../../models/ProductModel');
const ProductService = { 
    add:async({title,introduction,detail,cover,editTime})=>{
        return ProductModel.create({title,introduction,detail,cover,editTime})
    },
    getList:async({_id})=>{
        return _id? ProductModel.find({_id},["title","introduction","detail","cover"]):
        ProductModel.find({},["title","introduction","cover","editTime"]);
    },
    deleteProduct:async({_id})=>{
        return ProductModel.deleteOne({_id});
    },
    editProduct:async({_id,title,introduction,detail,cover,editTime})=>{
        return cover? ProductModel.updateOne({_id},{title,introduction,detail,cover,editTime})
        :ProductModel.updateOne({_id},{title,introduction,detail,editTime});
    }
}



module.exports = ProductService
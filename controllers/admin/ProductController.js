const ProductService = require('../../services/admin/ProductService')
const ProductController = {
    add:async(req,res)=>{
        const {title,introduction,detail} = req.body;
        const cover =`${process.env.API_ADDRESS}/productuploads/${req.file.filename}`;
        await ProductService.add({title,introduction,detail,cover,editTime:new Date()})
        res.send({
            ActionType:'ok'
        });  
    },
    getList:async(req,res)=>{
        const result = await ProductService.getList({_id:req.params.id});
        res.send({
            ActionType:'ok',
            data:result
        })
    },
    deleteProduct:async(req,res)=>{
        await ProductService.deleteProduct({_id:req.params.id});
        res.send({
            ActionType:'ok'
        })
    },
    editProduct:async(req,res)=>{
        const {_id,title,introduction,detail} = req.body;
        const cover =req.file? `${process.env.API_ADDRESS}/productuploads/${req.file.filename}`:'';
        await ProductService.editProduct({_id,title,introduction,detail,cover});
        res.send({
            ActionType:'ok'
        }); 
    }
}

module.exports = ProductController
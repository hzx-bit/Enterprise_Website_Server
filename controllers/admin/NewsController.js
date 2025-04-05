const NewsService = require('../../services/admin/NewsService')
const NewsController = {
    add:async(req,res)=>{
        const {title,content,category,isPublish} = req.body;
        const cover =`${process.env.API_ADDRESS}/newsuploads/${req.file.filename}`;
        await NewsService.add({title,content,category:Number(category),isPublish:Number(isPublish),cover,editTime:new Date()})
        res.send({
            ActionType:'ok'
        });  
    },
    updateList:async(req,res)=>{
        const {_id,title,content,category,isPublish} = req.body;
        const cover =req.file? `${process.env.API_ADDRESS}/newsuploads/${req.file.filename}`:'';
        await NewsService.updateList({_id,title,content,category:Number(category),isPublish:Number(isPublish),cover,editTime:new Date()})
        res.send({
            ActionType:'ok'
        });  
    },
    getList:async(req,res)=>{
        const result = await NewsService.getList(req.params);
        res.send({
            ActionType:'ok',
            data:result
        })
    },
    publish:async(req,res)=>{
        const result = await NewsService.publish({
            ...req.body,
            editTime:new Date()
        });
        res.send({
            ActionType:'ok'
        })
    },
    deleteNews:async(req,res)=>{
        await NewsService.deleteNews({_id:req.params.id});
        res.send({
            ActionType:'ok'
        })
    },
}

module.exports = NewsController
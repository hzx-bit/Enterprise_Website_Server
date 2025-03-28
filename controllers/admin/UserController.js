const UserService = require('../../services/admin/UserService')
const JWT = require('../../util/JWT')
const UserController = {
    login:async(req,res)=>{
        const result = await UserService.login(req.body);
        if(result.length===0){
            res.send({
                code:"-1",
                message:"用户名和密码不匹配"
            });
        }else{
            const token = JWT.generate({
                _id:result[0]._id,
                username:result[0].username
            },'1d');
            res.header('Authorization',token);
            res.send({
                ActionType:"ok",
                data:{
                    username:result[0].username,
                    gender:result[0].gender? result.gender:0,
                    introduction:result[0].introduction,
                    avator:result[0].avator,
                    role:result[0].role
                }
            })
        }
    },
    upload:async(req,res)=>{
        const {username,gender,introduction} = req.body;
        const avatar =req.file? `${process.env.API_ADDRESS}/avataruploads/${req.file.filename}`:'';
        const token = req.headers.authorization?.split(' ')[1];
        const payload = JWT.verify(token);
        await UserService.upload({username,gender:Number(gender),introduction,_id:payload._id,avatar})
        if(avatar){
            res.send({
                ActionType:"ok",
                data:{
                    username,
                    gender:Number(gender),
                    introduction,
                    avatar
                }
            })
        }else{
            res.send({
                ActionType:"ok",
                data:{
                    username,
                    gender:Number(gender),
                    introduction
                }
            })
        }
    }
}

module.exports = UserController
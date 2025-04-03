const UserModel = require('../../models/UserModel');
const UserService = {
    login:async({username,password})=>{
        return UserModel.find({
            username,
            password
        });
    },
    upload:async({username,gender,introduction,_id,avatar})=>{
        if(avatar){
            return UserModel.updateOne({_id},{
                username,
                gender,
                introduction,
                avatar
            })
        }else{
            return UserModel.updateOne({_id},{
                username,
                gender,
                introduction
            })
        }
    },
    add:async({username,password,gender,role,introduction,avatar})=>{
        return UserModel.create({username,password,gender,role,introduction,avatar})
    },
    getList:async({id})=>{
        return id? UserModel.find({_id:id},["username","role","password","introduction"]):UserModel.find({},["username","role","avatar","gender","introduction"]);
    },
    deleteUser:async({_id})=>{
        return UserModel.deleteOne({_id});
    },
    editUser:async({_id,username,password,role,introduction})=>{
        return UserModel.updateOne({_id},{
            username,password,role,introduction
        });
    }
}



module.exports = UserService
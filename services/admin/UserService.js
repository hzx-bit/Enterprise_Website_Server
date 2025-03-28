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
    }
}



module.exports = UserService
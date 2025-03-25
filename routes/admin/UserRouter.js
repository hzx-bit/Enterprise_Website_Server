var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controllers/admin/UserController')
const multer  = require('multer')
// 配置存储选项
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/avataruploads/') // 文件存储目录
    },
    filename: function (req, file, cb) {
      // 生成唯一文件名：时间戳+随机数+原始扩展名
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
// 初始化上传中间件
const upload = multer({ 
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5 // 限制5MB
    },
})
UserRouter.post('/adminapi/user/login',UserController.login)
UserRouter.post('/adminapi/user/upload',upload.single('file'),UserController.upload)
module.exports = UserRouter;
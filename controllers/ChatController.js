var express = require('express')
var router = express.Router()
const { list, create, Deletechat, updatechat, chatView } = require('../Service/ChatService')
//var validate = require('../middleware/validation')


router.get('/list',list)
router.post('/create' ,create)
router.delete('/delete/:Id', Deletechat)
router.put('/update/:id', updatechat)
router.get('/chat', chatView)

module.exports = router
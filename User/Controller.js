var express = require('express')
var router = express.Router()
const { list, create, DeleteUser, updateUser } = require('./UserService')
var validate = require('../middleware/validation')


router.get('/list',list)
router.post('/create/:age', validate ,create)
router.delete('/delete/:Id', DeleteUser)
router.put('/update/:id', updateUser)

module.exports = router
var express = require('express')
const {list, ProductsById,prouctPrice } = require('./productService')
var router = express.Router()
router.get('/list',list)
router.get('/list/:id',ProductsById)
router.get('/list/:id/:qt',prouctPrice)


module.exports = router
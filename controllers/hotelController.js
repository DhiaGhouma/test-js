var express = require('express')
var router = express.Router()
const { create, list, Deletehotel, updatehotel, searchHotels } = require('../Service/hotelService')



router.get('/list',list)
router.post('/create' ,create)
router.delete('/delete/:Id', Deletehotel)
router.put('/update/:id', updatehotel)
router.get('/search', searchHotels);

module.exports = router
var express = require('express')
const { osInfo, osCpus, osCpuById } = require('./OsService')
var router = express.Router()
router.get('/', osInfo)
router.get('/cpus',osCpus)
router.get('/cpus/:id', osCpuById)

module.exports = router
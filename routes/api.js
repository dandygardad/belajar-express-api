const express = require('express')
const router = express.Router()

// Panggil Controller
const MahasiswaController = require('../controllers/MahasiswaController')

router.get('/test', MahasiswaController.getData)

router.post('/test', MahasiswaController.postData)

module.exports = router
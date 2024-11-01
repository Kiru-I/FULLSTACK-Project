const express = require('express');
const router = express.Router();
const JavaScript = require('../models/javascriptModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const cors = require("cors")

const javascriptController = require('../controllers/javascriptController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token');
const corsOptionsDelegate = require('../middleware/cors.config');

// AMAN
// Mendapatkan Berita dengan ID
router.get('/t-id/:token' , cors(corsOptionsDelegate) , javascriptController.secureGetContentById)

// Mendapatan Semua Berita
router.get('/t-all/:token', cors(corsOptionsDelegate) , javascriptController.secureGetAllContent)



// GA AMAN
// Route untuk menambahkan menu baru
router.post('/add/:token', cors(corsOptionsDelegate) , javascriptController.Content);

// Route untuk mendapatkan semua menu
router.get('/', cors(corsOptionsDelegate) , javascriptController.getSemuaContent);



// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', cors(corsOptionsDelegate) , javascriptController.getContentById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', cors(corsOptionsDelegate) , javascriptController.updateContent);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', cors(corsOptionsDelegate) ,  javascriptController.deleteContent);

module.exports = router;

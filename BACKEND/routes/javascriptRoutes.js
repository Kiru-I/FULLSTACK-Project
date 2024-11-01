const express = require('express');
const router = express.Router();
const JavaScript = require('../models/javascriptModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const javascriptController = require('../controllers/javascriptController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token');

// AMAN
// Mendapatkan Berita dengan ID
router.get('/t-id/:token', javascriptController.secureGetContentById);

// Mendapatkan Semua Berita
router.get('/t-all/:token', javascriptController.secureGetAllContent);

// GA AMAN
// Route untuk menambahkan menu baru
router.post('/add/:token', javascriptController.Content);

// Route untuk mendapatkan semua menu
router.get('/', javascriptController.getSemuaContent);

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', javascriptController.getContentById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', javascriptController.updateContent);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', javascriptController.deleteContent);
module.exports = router;

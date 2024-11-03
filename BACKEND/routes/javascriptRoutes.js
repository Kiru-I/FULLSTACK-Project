const express = require('express');
const router = express.Router();
const jsContent = require('../models/javascriptModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const jsController = require('../controllers/javascriptController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token');

// AMAN
// Mendapatkan Berita dengan ID
router.get('/t-id/:token', jsController.secureGetContentById);

// Mendapatkan Semua Berita
router.get('/t-all/:token', jsController.secureGetAllContent);

// GA AMAN
// Route untuk menambahkan menu baru
router.post('/add/:token', jsController.Content);

// Route untuk mendapatkan semua menu
router.get('/', jsController.getSemuaContent);

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', jsController.getContentById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', jsController.updateContent);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', jsController.deleteContent);
module.exports = router;

const express = require('express');
const router = express.Router();
const homeContent = require('../models/homeModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const homeController = require('../controllers/homeController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token');

// AMAN
// Mendapatkan Berita dengan ID
router.get('/t-id/:token', homeController.secureGetContentById);

// Mendapatkan Semua Berita
router.get('/t-all/:token', homeController.secureGetAllContent);

// GA AMAN
// Route untuk menambahkan menu baru
router.post('/add/:token', homeController.Content);

// Route untuk mendapatkan semua menu
router.get('/', homeController.getSemuaContent);

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', homeController.getContentById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', homeController.updateContent);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', homeController.deleteContent);
module.exports = router;

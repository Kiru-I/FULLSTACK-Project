const express = require('express');
const router = express.Router();
const pyContent = require('../models/pythonModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const pyController = require('../controllers/pythonController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token');

// AMAN
// Mendapatkan Berita dengan ID
router.get('/t-id/:token', pyController.secureGetContentById);

// Mendapatkan Semua Berita
router.get('/t-all/:token', pyController.secureGetAllContent);

// GA AMAN
// Route untuk menambahkan menu baru
router.post('/add/:token', pyController.Content);

// Route untuk mendapatkan semua menu
router.get('/', pyController.getSemuaContent);

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', pyController.getContentById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', pyController.updateContent);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', pyController.deleteContent);
module.exports = router;

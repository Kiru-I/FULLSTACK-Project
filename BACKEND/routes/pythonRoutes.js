const express = require('express');
const router = express.Router();
const Content = require('../models/pythonModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const Controller = require('../controllers/pythonController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token');

// AMAN
// Mendapatkan Berita dengan ID
router.get('/t-id/:token', Controller.secureGetContentById);

// Mendapatkan Semua Berita
router.get('/t-all/:token', Controller.secureGetAllContent);

// GA AMAN
// Route untuk menambahkan menu baru
router.post('/add/:token', Controller.Content);

// Route untuk mendapatkan semua menu
router.get('/', Controller.getSemuaContent);

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', Controller.getContentById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', Controller.updateContent);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', Controller.deleteContent);
module.exports = router;

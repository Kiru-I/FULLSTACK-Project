// Import model Menu
const JavaScript = require('../models/javascriptModel');
require('dotenv').config()
const jwt = require('jsonwebtoken')
const key2 = process.env.JWT_KEY_2.toString()
const key = process.env.JWT_KEY.toString()

// INI YANG AMAN
exports.secureGetContentById = async (req, res) => {
  const tiket = req.params.token
  try {
    const tiket_value = jwt.verify(tiket, key)
    if(tiket_value.stat[1] === "byid" && tiket_value.stat[0] === key2) {
      try {
        const ContentbyId = await JavaScript.findById(tiket_value.id); // Mengambil 1 data berita
        res.status(200).json({
          message: 'Berhasil mendapatkan JavaScript content',
          Content: ContentbyId
        });
      } catch (error) {
        res.status(500).json({
          message: 'Gagal mendapatkan JavaScript content',
          error: error.message
        });
      }
    } else {
      res.status(402).json({ message : "Invalid Token Key" })
    }
  } catch(error) {
    res.status(403).json(error)
  }
}

exports.secureGetAllContent = async (req, res) => {
  const tiket = req.params.token
  try {
    const tiket_value = jwt.verify(tiket, key)
    if(tiket_value.stat[1] === "all" && tiket_value.stat[0] === key2) {
      try {
        const AllContent = await JavaScript.find(); // Mengambil 1 data berita
        res.status(200).json({
          message: 'Berhasil mendapatkan content',
          Content: AllContent
        });
      } catch (error) {
        res.status(500).json({
          message: 'Gagal mendapatkan content',
          error: error.message
        });
      }
    } else {
      res.status(402).json({ message : "Invalid Stat" })
    }
  } catch(error) {
      res.status(403).json(error)
  }
}


// INI YANG KAGA AMAN
// Controller untuk membuat menu baru
exports.Content = async (req, res) => {
  try {
    const ContentBaru = new JavaScript(req.body); // Data menu dikirimkan melalui body request
    const ContentTersimpan = await ContentBaru.save();
    res.status(201).json({
      message: 'Content berhasil ditambahkan',
      Content: ContentTersimpan
    });
  } catch (error) {
    res.status(400).json({
      message: 'Gagal menambahkan Content',
      error: error.message
    });
  }
};

// Controller untuk mendapatkan semua menu
exports.getSemuaContent = async (req, res) => {
  try {
    const semuaContent = await JavaScript.find(); // Mengambil semua data menu
    res.status(200).json({
      message: 'Berhasil mendapatkan semua Content',
      Content: semuaContent
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mendapatkan Content',
      error: error.message
    });
  }
};

// Controller untuk mendapatkan satu menu berdasarkan ID
exports.getContentById = async (req, res) => {
  try {
    const content = await JavaScript.findById(req.params.id); // Mengambil menu berdasarkan ID
    if (!content) {
      return res.status(404).json({
        message: 'Content tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Berhasil mendapatkan Content',
      Content : content 
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mendapatkan Content',
      error: error.message
    });
  }
};


// Controller untuk mengupdate menu
exports.updateContent = async (req, res) => {
  try {
    const contentDiupdate = await JavaScript.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Mengembalikan menu yang sudah di-update
      runValidators: true // Menjalankan validasi berdasarkan schema
    });
    if (!contentDiupdate) {
      return res.status(404).json({
        message: 'Content tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Content berhasil diupdate',
      Content: contentDiupdate
    });
  } catch (error) {
    res.status(400).json({
      message: 'Gagal mengupdate Content',
      error: error.message
    });
  }
};

// Controller untuk menghapus menu
exports.deleteContent = async (req, res) => {
  try {
    const contentDihapus = await JavaScript.findByIdAndDelete(req.params.id);
    if (!contentDihapus) {
      return res.status(404).json({
        message: 'Content tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Content berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menghapus Content',
      error: error.message
    });
  }
};

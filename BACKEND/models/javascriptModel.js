const mongoose = require('mongoose');

// Buat skema Menu Makanan
const jsSchema = new mongoose.Schema({
  
    Img:{
    type: String,
    required: true
  },

    Judul: {
    type: String,
    required: true
  },

    IsiJudul:{
        type: String,
        required: true
    },
    Isi:{
        type: Array,
        required: true
    },
});

// Buat model Menu menggunakan skema di atas
const JavaScript = mongoose.model('JavaScript', jsSchema);

// Export model agar bisa digunakan di file lain
module.exports = JavaScript;
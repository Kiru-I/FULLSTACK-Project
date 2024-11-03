const mongoose = require('mongoose');

// Buat skema Menu Makanan
const pySchema = new mongoose.Schema({
  
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
const pyContent = mongoose.model('pyContent', pySchema);

// Export model agar bisa digunakan di file lain
module.exports = pyContent;
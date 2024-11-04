const mongoose = require('mongoose');

// Buat skema Menu Makanan
const homeSchema = new mongoose.Schema({
  
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
    }
});

// Buat model Menu menggunakan skema di atas
const homeContent = mongoose.model('homeContent', homeSchema);

// Export model agar bisa digunakan di file lain
module.exports = homeContent;
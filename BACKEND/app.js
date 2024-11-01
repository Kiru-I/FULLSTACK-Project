const express = require('express');
const connection = require('./database/mongoConnection')
const cookieParser = require('cookie-parser')
const cors = require("cors")
const helmet = require("helmet")

connection();
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Gunakan route menu
app.use('/api/js', require('./routes/javascriptRoutes'));
app.use('/pns', require('./routes/tokenRoutes'))

// Mideweh
app.use(helmet())
app.use(cookieParser())
app.use(cors())

// Start the server
const PORT = 7272;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
const express = require('express');
const connection = require('./database/mongoConnection');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const helmet = require("helmet");
const corsOptionsDelegate = require('./middleware/cors.config');

connection();
const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(cors(corsOptionsDelegate));

// Gunakan route menu
app.use('/api/py', require('./routes/pythonRoutes'));
app.use('/api/js', require('./routes/javascriptRoutes'));
app.use('/yopipiw', require('./routes/tokenRoutes'));

// Mideweh

// Start the server
const PORT = 7272;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

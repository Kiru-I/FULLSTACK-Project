require('dotenv').config();

var allowlist = [process.env.DOMAIN.toString()];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {
        origin: true, // Automatically set the origin
        credentials: true, // Allow credentials (cookies, etc.)
        methods: "GET, POST", // Specify allowed methods
    };
  } else {
    corsOptions = { origin: false }; // Block access
  }
  callback(null, corsOptions); 
};

module.exports = corsOptionsDelegate;

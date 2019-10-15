const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  wordnik_key: process.env.WORDNIK_API_KEY,
  port: process.env.PORT || 3000
};
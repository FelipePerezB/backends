/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

const config = {
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DB_URL,
};

module.exports = config;

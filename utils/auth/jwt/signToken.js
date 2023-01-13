const jwt = require('jsonwebtoken');
const config = require('../../../config');

const signToken = (user) => {
  const secret = config.jwtSecret;
  const payload = {
    sub: user.id,
  };
  const token = jwt.sign(payload, secret, { expiresIn: '1d' });
  return token;
};

module.exports = signToken;

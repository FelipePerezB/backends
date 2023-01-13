/* eslint-disable import/no-extraneous-dependencies */
const { Router } = require('express');
const passport = require('passport');
const signToken = require('../utils/auth/jwt/signToken');

const router = Router();

const passportAuth = passport.authenticate('local', { session: false });

const login = async (req, res) => {
  const token = signToken(req.user);
  res.status(200).json(token);
};

router.post('/login', passportAuth, login);

module.exports = router;

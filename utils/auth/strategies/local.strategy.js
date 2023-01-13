/* eslint-disable import/no-extraneous-dependencies */
const boom = require('@hapi/boom');
const { Strategy } = require('passport-local');
const AuthService = require('../../../services/auth.service');

const service = new AuthService();
const options = {
  usernameField: 'email',
  passwordField: 'password',
};

const verify = async (email, password, done) => {
  const token = await service.getUser(email, password);
  if (!token) done(boom.unauthorized(), false);
  done(null, token);
};

const LocalStrategy = new Strategy(options, verify);

module.exports = LocalStrategy;

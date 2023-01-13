/* eslint-disable import/no-extraneous-dependencies */
const { Strategy, ExtractJwt } = require('passport-jwt');
const config = require('../../../config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const JwtStrategy = new Strategy(options, (payload, done) => done(null, payload));

module.exports = JwtStrategy;

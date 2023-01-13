/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UserService = require('./user.service');

const userService = new UserService();

class AuthService {
  async getUser(email, passwordInput) {
    const user = await userService.findByEmail(email);
    if (!user) throw boom.unauthorized();
    const isMatch = bcrypt.compare(passwordInput, user.password);
    if (!isMatch) throw boom.unauthorized('The password is incorrect');
    return user;
  }
}

module.exports = AuthService;

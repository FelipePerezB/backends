/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
// const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../sequelize');
const signToken = require('../utils/auth/jwt/signToken');

class UserService {
  async create(data) {
    const newPassword = await bcrypt.hash(data.password, 10);
    // eslint-disable-next-line no-param-reassign
    delete data.password;
    const user = await models.users.create({
      ...data,
    });
    await models.auth.create({
      userId: user.id,
      password: newPassword,
    });
    const token = signToken(user);
    return { user, token };
  }

  async findAll() {
    const users = await models.users.findAll();
    return users;
  }

  async findByEmail(email) {
    const user = await models.users.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}

module.exports = UserService;

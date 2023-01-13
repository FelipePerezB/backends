/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
// const boom = require('@hapi/boom');
const { models } = require('../sequelize');

class FollowService {
  async create(userTo, userFrom) {
    const follow = await models.follows.create({
      userTo,
      userFrom,
    });

    return { follow };
  }
}

module.exports = FollowService;

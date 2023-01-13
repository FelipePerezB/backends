/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
// const boom = require('@hapi/boom');
const { models } = require('../sequelize');

class LikeService {
  async create(postId, userId) {
    const like = await models.likes.create({
      userId,
      postId,
    });

    return { like };
  }
}

module.exports = LikeService;

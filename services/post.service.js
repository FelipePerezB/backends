/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
// const boom = require('@hapi/boom');
// const UserService = require('./user.service');
const { models } = require('../sequelize');

// const service = new UserService();

class PostService {
  async create(body, id) {
    const post = models.post.create({
      ...body,
      owner: id,
    });
    return post;
  }
}

module.exports = PostService;

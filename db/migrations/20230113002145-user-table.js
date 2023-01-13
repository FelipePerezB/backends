const { USER_TABLE, userSchema } = require('../models/user.model');
const { AUTH_TABLE, authSchema } = require('../models/auth.model');
const { POST_TABLE, postSchema } = require('../models/post.model');
const { LIKE_TABLE, likeSchema } = require('../models/like.model');
const { FOLLOW_TABLE, followSchema } = require('../models/follow.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, userSchema);
    await queryInterface.createTable(AUTH_TABLE, authSchema);
    await queryInterface.createTable(POST_TABLE, postSchema);
    await queryInterface.createTable(LIKE_TABLE, likeSchema);
    await queryInterface.createTable(FOLLOW_TABLE, followSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(FOLLOW_TABLE);
    await queryInterface.dropTable(LIKE_TABLE);
    await queryInterface.dropTable(AUTH_TABLE);
    await queryInterface.dropTable(POST_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};

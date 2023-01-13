const { UserClass, userSchema } = require('./user.model');
const { AuthClass, authSchema } = require('./auth.model');
const { PostClass, postSchema } = require('./post.model');
const { LikeClass, likeSchema } = require('./like.model');
const { FollowClass, followSchema } = require('./follow.model');

function setupModels(sequelize) {
  UserClass.init(userSchema, UserClass.config(sequelize));
  PostClass.init(postSchema, PostClass.config(sequelize));
  AuthClass.init(authSchema, AuthClass.config(sequelize));
  LikeClass.init(likeSchema, LikeClass.config(sequelize));
  FollowClass.init(followSchema, FollowClass.config(sequelize));

  UserClass.associate(sequelize.models);
  PostClass.associate(sequelize.models);
}

module.exports = setupModels;

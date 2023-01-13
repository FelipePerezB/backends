/* eslint-disable import/no-extraneous-dependencies */
const { Model, DataTypes } = require('sequelize');
const { POST_TABLE } = require('./post.model');
const { USER_TABLE } = require('./user.model');

const LIKE_TABLE = 'likes';
const likeSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: POST_TABLE,
      key: 'id',
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
};

class LikeClass extends Model {
  static associate(models) {
    this.belongsTo(models.users, { as: 'user' });
    this.belongsTo(models.post, { as: 'post' });
  }

  static config = (sequelize) => ({
    sequelize,
    tableName: LIKE_TABLE,
    modelName: LIKE_TABLE,
    timestamps: false,
  });
}

module.exports = { LIKE_TABLE, likeSchema, LikeClass };

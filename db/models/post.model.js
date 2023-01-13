/* eslint-disable import/no-extraneous-dependencies */
const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const POST_TABLE = 'post';
const postSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT('medium'),
    allowNull: false,
  },
  owner: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class PostClass extends Model {
  static associate(models) {
    this.belongsTo(models.users, { as: 'users' });
    this.hasMany(models.likes, { as: 'likes', foreignKey: 'postId' });
  }

  static config = (sequelize) => ({
    sequelize,
    tableName: POST_TABLE,
    modelName: POST_TABLE,
    timestamps: false,
  });
}

module.exports = { POST_TABLE, postSchema, PostClass };

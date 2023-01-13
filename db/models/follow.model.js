/* eslint-disable import/no-extraneous-dependencies */
const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const FOLLOW_TABLE = 'follows';
const followSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userFrom: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  },
  userTo: {
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

class FollowClass extends Model {
  static associate(models) {
    this.belongsTo(models.users, { as: 'userFrom' });
    this.belongsTo(models.users, { as: 'userTo' });
  }

  static config = (sequelize) => ({
    sequelize,
    tableName: FOLLOW_TABLE,
    modelName: FOLLOW_TABLE,
    timestamps: false,
  });
}

module.exports = { FOLLOW_TABLE, followSchema, FollowClass };

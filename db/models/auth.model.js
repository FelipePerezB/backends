/* eslint-disable import/no-extraneous-dependencies */
const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const AUTH_TABLE = 'auth';
const authSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

class AuthClass extends Model {
  static associate(models) {
    this.belongsTo(models.users, { as: 'users' });
  }

  static config = (sequelize) => ({
    sequelize,
    tableName: AUTH_TABLE,
    modelName: AUTH_TABLE,
    timestamps: false,
  });
}

module.exports = { AUTH_TABLE, authSchema, AuthClass };

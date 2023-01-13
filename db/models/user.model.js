/* eslint-disable import/no-extraneous-dependencies */
const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'users';
const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(31),
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(31),
  },
  email: {
    type: DataTypes.STRING(63),
    unique: true,
    allowNull: false,
  },
};

class UserClass extends Model {
  static associate(models) {
    this.hasOne(models.auth, { as: 'auth', foreignKey: 'userId' });
    this.hasMany(models.post, { as: 'post', foreignKey: 'owner' });
    this.hasMany(models.likes, { as: 'likes', foreignKey: 'userId' });
    this.hasMany(models.follows, { as: 'follow', foreignKey: 'userId' });
  }

  static config = (sequelize) => ({
    sequelize,
    tableName: USER_TABLE,
    modelName: USER_TABLE,
    timestamps: false,
  });
}

module.exports = { USER_TABLE, userSchema, UserClass };

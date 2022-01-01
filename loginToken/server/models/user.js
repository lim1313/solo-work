'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.movie, {
        foreignKey: 'users_id', // movie 테이블의 fk
        sourceKey: 'id', // user 테이블의 pk
      });
    }
  }
  user.init(
    {
      userId: DataTypes.STRING,
      password: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
    }
  );
  return user;
};

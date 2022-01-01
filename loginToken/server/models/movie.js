'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.movie.belognsTo(models.user, {
        foreignKey: 'users_id', // movie 테이블의 fk
        targetKey: 'id', // user 테이블의 pk
      });
    }
  }
  movie.init(
    {
      users_Id: DataTypes.INTEGER,
      movieName: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'movie',
    }
  );
  return movie;
};

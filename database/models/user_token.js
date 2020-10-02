'use strict'; 

const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_token.init({
    user_id: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_token',
  });
  return user_token;
};
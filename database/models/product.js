'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    presentation: DataTypes.STRING,
    performance: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_variety extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  products_variety.init({
    products.variety: DataTypes.STRING,
    variety.products: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products_variety',
  });
  return products_variety;
};
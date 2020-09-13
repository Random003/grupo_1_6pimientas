'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_variety extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product_variety.init({
    id_product: DataTypes.INTEGER,
    id_variety: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_variety',
  });
  return product_variety;
};
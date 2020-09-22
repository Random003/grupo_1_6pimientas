'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_shopping_bag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.shopping_bag, { 
        as: 'shopping_bag',
        foreignKey: 'shopping_bag_id' });
    }
  };
  detail_shopping_bag.init({
    shopping_bag_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    variety_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    u_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'detail_shopping_bag',
  });
  return detail_shopping_bag;
};
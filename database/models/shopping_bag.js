'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_bag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.detail_shopping_bag, { 
        as: 'detail_shopping',
        foreignKey: 'id' });
    }
  };
  shopping_bag.init({
    date_purchase: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    delivery_type: DataTypes.STRING,
    delivery_address: DataTypes.STRING,
    way_to_pay: DataTypes.STRING,
    status: DataTypes.STRING,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'shopping_bag',
  });
  return shopping_bag;
};
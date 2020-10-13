const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    salesorders_id: {
      type: DataTypes.INTEGER,
      foreignkey: true,
      },
    products_id: {
      type: DataTypes.INTEGER,
      foreignkey: true,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL(5,2),
    },
    totalAmount: {
      type: DataTypes.DECIMAL(8,2)
    },
  }, {
    sequelize,
    modelName: 'OrderProduct',
    tableName: 'orderproducts'
  });
  /* OrderProduct.associate = (models) => {
    // Relação
  }*/
  return OrderProduct;
};
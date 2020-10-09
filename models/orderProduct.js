const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    salesorders_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'SalesOrder',
        key: 'id'
      }
    },
    products_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.DECIMAL(5,2),
    },
    totalAmount: {
      type: Sequelize.DECIMAL(8,2)
    },
  }, {
    sequelize,
    modelName: 'OrderProduct',
    tableName: 'orderproducts'
  });
  OrderProduct.associate = (models) => {
    // Relação
  }
  return OrderProduct;
};
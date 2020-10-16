const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    customers_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    products_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    sequelize,
    modelName: 'Subscription',
    tableName: 'subscriptions'
  });
  Subscription.associate = (models) => {
   // relacionamentos
  }
  return Subscription;
};
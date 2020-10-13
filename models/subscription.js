const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    customer_id: {
      type: DataTypes.INTEGER,
      foreignkey: true,
    },
    products_id: {
      type: DataTypes.INTEGER,
      foreignkey: true,
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
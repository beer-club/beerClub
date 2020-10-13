const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customer',
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
  }, {
    sequelize,
    modelName: 'Subscription',
    tableName: 'subscriptions'
  });
  Subscription.associate = (models) => {
    /*
    Subscription.hasOne(models.Customer, {
      foreignkey: 'customers_id',
      targetKey: 'id',
      as: 'a',
      through: 'Customer'
    })
   */
  }
  return Subscription;
};
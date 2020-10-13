const { Model, DATE } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    salesOrders_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignkey: true,
    },
    deliveryCode: {
      type: DataTypes.INTEGER,
    },
    deliveryDate: {
      type: DataTypes.DATE,
    },
    deliveryTimestamp: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Delivery',
    tableName: 'deliverys'
  });

  Delivery.associate = (models) => {
    
    Delivery.belongsTo(models.SalesOrder, {
      foreignkey: 'salesOrders_id',
      as: 'EntregaPedido'
    });
    
  }
  return Delivery;
};
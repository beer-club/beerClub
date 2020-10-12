const { Model, DATE } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    salesOrders_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

  Traking.associate = (models) => {
    /*
    Delivery.belongToMany(models.SalesOrder, {
      foreignkey: 'salesOrders_id',
      targetKey: 'id',
      as: 'EntregaPedido'
    });
    */
  }
  return Delivery;
};
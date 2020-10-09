const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SalesOrder = sequelize.define('SalesOrder', {
    orderNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    addressNumber: DataTypes.INTEGER,
    addressComplement: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    federativeUnit: DataTypes.STRING,
    country: DataTypes.STRING,
    totalAmount: DataTypes.DECIMAL(8,2),
  }, {
    sequelize,
    modelName: 'SalesOrder',
    tableName: 'salesOrders',
  });
  
<<<<<<< HEAD
  /* Customer.associate = (models) => {
    Customer.belongsTo(models.Customer, {
=======
  SalesOrder.associate = (models) => {
    SalesOrder.belongsTo(models.Customer, {
>>>>>>> 9452a15044bff0f0d63915eea3ff4b0715ea6812
        foreignkey: 'customers_id',
        targetKey: 'id',
        as: 'pedido'
    });
<<<<<<< HEAD
    
  }*/
=======
    SalesOrder.belongsToMany(models.OrderProduct, {
      foreignkey: 'salesorders_id',
      targetKey: 'id',
      as: 'pedido',
      through: 'OrderProduct'
    });
    SalesOrder.belongToMany(models.Traking, {
        foreignkey: 'salesOrders_id',
        targetKey: 'id',
        as: 'trakingPedido'
    });
  }
>>>>>>> 9452a15044bff0f0d63915eea3ff4b0715ea6812
  return SalesOrder;
};
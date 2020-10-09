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
  
  /* Customer.associate = (models) => {
    Customer.belongsTo(models.Customer, {
        foreignkey: 'customers_id',
        targetKey: 'id',
        as: 'pedido'
    });
    
  }*/
  return SalesOrder;
};
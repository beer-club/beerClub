const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    products_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    measureUnit: {
      type: DataTypes.STRING,
    },
    balance: {
      type: DataTypes.INTEGER,
    },
    lot: {
      type: DataTypes.INTEGER,
    },
    expiryDate: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Inventory',
    tableName: 'inventorys'
  });
  
  /*Inventory.associate = (models) => {
    
    Inventory.hasMany(models.Product, {
      foreignKey: 'product_id',
      as: 'inventario'
    });
    
    Inventory.belongsTo(models.InventoryRecord, {
      foreignKey: 'inventorys_id',
      as: 'movimentoInventario'
    });
    
  }*/
  return Inventory;
};
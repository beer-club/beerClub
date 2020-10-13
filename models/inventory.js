const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    products_id: {
      type: DataTypes.INTEGER,
      foreignkey: true,
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
  
  Inventory.associate = (models) => {
    
    Inventory.hasMany(models.Product, {
      foreignkey: 'product_id',
      as: 'inventario'
    });
    
    Inventory.belongsTo(models.InventoryRecord, {
      foreignkey: 'inventorys_id',
      as: 'movimentoInventario'
    });
    
  }
  return Inventory;
};
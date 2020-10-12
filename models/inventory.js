const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    products_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
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
    /*
    Inventory.belongsTo(models.Product, {
      foreignkey: 'product_id',
        targetKey: 'id',
        as: 'inventario'
    });
    Inventory.hasMany(models.InventoryRecord, {
      foreignkey: 'inventorys_id',
        targetKey: 'id',
        as: 'movimentoInventario'
    });
    */
  }
  return Inventory;
};
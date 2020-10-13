const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const InventoryRecord = sequelize.define('InventoryRecord', {
    inventorys_products_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Inventory',
        key: 'id'
      }
    },
    lot: {
      type: DataTypes.INTEGER,
    },
    movementType: {
      type: DataTypes.STRING,
    },
    movementDate: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'InventoryRecord',
    tableName: 'inventoryrecords'
  });
  InventoryRecord.associate = (models) => {
    
    InventoryRecord.hasMany(models.Inventory, {
      foreignkey: 'inventorys_id',
        targetKey: 'id',
        as: 'movimentoInventario'
    });
    
  }
  return InventoryRecord;
};
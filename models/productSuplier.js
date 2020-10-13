const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ProductSuplier = sequelize.define('ProductSuplier', {
    products_id: {
      type: DataTypes.INTEGER,
      foreignkey: true,
    },
    supliers_id: {
      type: DataTypes.INTEGER,
      foreignkey: true,
    },
  }, {
    sequelize,
    modelName: 'ProductSuplier',
    tableName: 'productSupliers'
  });
  /*ProductSuplier.associate = (models) => {
    // Relação
  }*/
  return ProductSuplier;
};
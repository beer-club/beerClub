const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ProductSuplier = sequelize.define('ProductSuplier', {
    products_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    supliers_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    sequelize,
    modelName: 'ProductSuplier',
    tableName: 'productSupliers'
  });
  return ProductSuplier;
};
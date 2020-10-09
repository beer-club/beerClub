const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ProductSuplier = sequelize.define('ProductSuplier', {
    products_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    supliers_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Suplier',
        key: 'id'
      }
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
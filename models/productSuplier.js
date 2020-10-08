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
  ProductSuplier.associate = (models) => {
    ProductSuplier.hasMany(models.Product, {
      foreignkey: 'products_id',
      targetKey: 'id',
      as: 'ProdutoFornecedor'
    });
    ProductSuplier.hasMany(models.Product, {
      foreignkey: 'suplier_id',
      targetKey: 'id',
      as: 'FornecedorProduto'
    });
  }
  return ProductSuplier;
};
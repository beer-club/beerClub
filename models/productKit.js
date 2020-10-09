const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ProductKit = sequelize.define('ProductKit', {
    products_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    products_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'ProductKit',
    tableName: 'productKits'
  });
  ProductKit.associate = (models) => {
    // Relação
  }
  return ProductKit;
};